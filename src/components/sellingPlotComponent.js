import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import ChartTypeButtonBox from "./s/chartTypeButtonBox"
import MeasureTypeButtonBox from "./s/measureTypeButtonBox"
import TimeRangeButtonBox from "./s/timeRangeButtonBox"

import ReactEcharts from "echarts-for-react";


export default function SellingPlotComponent() {
  const { t } = useTranslation();
  const [chartType, setChartType] = useState("line");
  const [measureType, setMeasureType] = useState("money")
  const [timeRange, setTimeRange] = useState("previous_week")
  const [seriesData, setSeriesData] = useState([])

  const nickname = "JanKowalski";

  const barOnClick = () => {
    setChartType("bar");
  };

  const lineOnClick = () => {
    setChartType("line");
  };

  const moneyOnClick = () => {
    setMeasureType("money");
    getSeriesData();
  };

  const pieceOnClick = () => {
    setMeasureType("piece");
    getSeriesData();
  };

  const todayOnClick = () => {
    setTimeRange("today");
    getSeriesData();
  };

  const currentWeekOnClick = () => {
    setTimeRange("current_week");
    getSeriesData();
  };

  const previousWeekOnClick = () => {
    setTimeRange("previous_week");
    getSeriesData();
  };

  const getXAxisData = () => {
    if (timeRange === "today")
      return ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00",
        "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00",
        "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
    if (timeRange === "current_week")
      return [t("monday"), t("tuesday"), t("wednesday"), t("thursday"), t("friday"), t("saturday"), t("sunday")]
    if (timeRange === "previous_week")
      return [t("january"), t("february"), t("march"), t("april"), t("may"), t("june"),
      t("july"), t("august"), t("september"), t("october"), t("november"), t("december")]
  };

  useEffect(() => {
    getSeriesData();
  }, [measureType, timeRange])

  const getSeriesData = () => {
    if (timeRange === "today")
      getSeriesDataToday();
    if (timeRange === "current_week")
      getSeriesDataCurrentWeek();
    if (timeRange === "previous_week")
      getSeriesDataPreviousWeek();
  };

  const getSeriesDataToday = () => {
    if (measureType === "money")
      fetch(`http://127.0.0.1:5000/users/${nickname}/sellings?period=${timeRange}`)
        .then(response => response.json())
        .then(data => {
          let moneys = new Array(24);
          data["sellings"].forEach(s => {
            moneys[s["time"]["hour"]] = s["piecesNum"] * s["price"];
          });
          moneys = moneys.map(m => m.toFixed(2));
          setSeriesData(moneys);
        });
    if (measureType === "piece")
      fetch(`http://127.0.0.1:5000/users/${nickname}/sellings?period=${timeRange}`)
        .then(response => response.json())
        .then(data => {
          let pieces = new Array(24);
          data["sellings"].forEach(s => {
            pieces[s["time"]["hour"]] = s["piecesNum"];
          });
          setSeriesData(pieces);
        });
  };

  const getSeriesDataCurrentWeek = () => {
    if (measureType === "money")
      fetch(`http://127.0.0.1:5000/users/${nickname}/sellings?period=${timeRange}`)
        .then(response => response.json())
        .then(data => {
          let moneys = new Array(7);
          data["sellings"].forEach(s => {
            moneys[s["day"]] = s["piecesNum"] * s["price"];
          });
          moneys = moneys.map(m => m.toFixed(2));
          setSeriesData(moneys);
        });
    if (measureType === "piece")
      fetch(`http://127.0.0.1:5000/users/${nickname}/sellings?period=${timeRange}`)
        .then(response => response.json())
        .then(data => {
          let pieces = new Array(7);
          data["sellings"].forEach(s => {
            pieces[s["day"]] = s["piecesNum"];
          });
          setSeriesData(pieces);
        });
  };

  const getSeriesDataPreviousWeek = () => {
    if (measureType === "money")
      fetch(`http://127.0.0.1:5000/users/${nickname}/sellings?period=${timeRange}`)
        .then(response => response.json())
        .then(data => {
          let moneys = new Array(12);
          data["sellings"].forEach(s => {
            moneys[s["month"]] = s["piecesNum"] * s["price"];
          });
          moneys = moneys.map(m => m.toFixed(2));
          setSeriesData(moneys);
        });
    if (measureType === "piece")
      fetch(`http://127.0.0.1:5000/users/${nickname}/sellings?period=${timeRange}`)
        .then(response => response.json())
        .then(data => {
          let pieces = new Array(12);
          data["sellings"].forEach(s => {
            pieces[s["month"]] = s["piecesNum"];
          });
          setSeriesData(pieces);
        });
  };

  return <Grid container
    spacing={1}
    borderRadius="20px"
    bgcolor="#ffffff"
    margin="auto"
    padding="10px">
    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h5">
            {t("sellingPlot")}
          </Typography>
        </Grid>
        <Grid item pl={1}>
          <ChartTypeButtonBox
            barOnClick={barOnClick} barDisabled={chartType === "bar"}
            lineOnClick={lineOnClick} lineDisabled={chartType === "line"} />
        </Grid>
        <Grid item pl={1}>
          <MeasureTypeButtonBox
            moneyOnClick={moneyOnClick} moneyDisabled={measureType === "money"}
            pieceOnClick={pieceOnClick} pieceDisabled={measureType === "piece"} />
        </Grid>
        <Grid item pl={1}>
          <TimeRangeButtonBox
            todayOnClick={todayOnClick} todayDisabled={timeRange === "today"}
            currentWeekOnClick={currentWeekOnClick} currentWeekDisabled={timeRange === "current_week"}
            previousWeekOnClick={previousWeekOnClick} previousWeekDisabled={timeRange === "previous_week"} />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <ReactEcharts
        option={{
          xAxis: {
            type: "category",
            data: getXAxisData()
          },
          yAxis: {
            type: "value"
          },
          series: [{
            data: seriesData,
            type: chartType
          }]
        }}
      />
    </Grid>
  </Grid>;
}
