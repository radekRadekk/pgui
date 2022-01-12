import React, { useState } from "react";
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

  const barOnClick = () => {
    setChartType("bar");
  };

  const lineOnClick = () => {
    setChartType("line");
  };

  const moneyOnClick = () => {
    setMeasureType("money");
  };

  const pieceOnClick = () => {
    setMeasureType("piece");
  };

  const todayOnClick = () => {
    setTimeRange("today");
  };

  const currentWeekOnClick = () => {
    setTimeRange("current_week");
  };

  const previousWeekOnClick = () => {
    setTimeRange("previous_week");
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
          <ChartTypeButtonBox barOnClick={barOnClick} lineOnClick={lineOnClick} />
        </Grid>
        <Grid item pl={1}>
          <MeasureTypeButtonBox moneyOnClick={moneyOnClick} pieceOnClick={pieceOnClick} />
        </Grid>
        <Grid item pl={1}>
          <TimeRangeButtonBox todayOnClick={todayOnClick} currentWeekOnClick={currentWeekOnClick} previousWeekOnClick={previousWeekOnClick} />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <ReactEcharts
        option={{
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          yAxis: {
            type: "value"
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: chartType
          }]
        }}
      />
    </Grid>
  </Grid>;
}
