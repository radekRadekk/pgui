import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import OrderCategoryComponent from "./s/orderCategoryComponent"

export default function OrdersComponent() {
  const { t } = useTranslation();
  const [data, setData] = useState({
    "unpaid": 0,
    "unsent": 0,
    "returns": 0
  })

  const nickname = "JanKowalski";

  useEffect(() => {
    loadData();
  }, [data])

  const loadData = () => {
    fetch(`http://127.0.0.1:5000/users/${nickname}/orders`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  };

  return <Grid container
    spacing={1}
    borderRadius="20px"
    bgcolor="#ffffff"
    padding="10px">
    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h5">
            {t("orders")}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} padding="10px">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} padding="10px">
          <OrderCategoryComponent name={t("unpaid")} link="/unpaid-orders" number={data['unpaid']} />
        </Grid>
        <Grid item xs={12} md={4} padding="10px">
          <OrderCategoryComponent name={t("unsent")} link="/unsent-orders" number={data['unsent']} />
        </Grid>
        <Grid item xs={12} md={4} padding="10px">
          <OrderCategoryComponent name={t("returns")} link="/returned-orders" number={data['returns']} />

        </Grid>
      </Grid>
    </Grid>
  </Grid>;
}
