import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import OrderCategoryComponent from "./s/orderCategoryComponent"
import { useTheme } from '@material-ui/core/styles';

export default function OrdersComponent(props) {
  const { t } = useTranslation();
  const theme = useTheme();
    
  const [ordersData, setOrdersData] = useState({
    "unpaid": 0,
    "unsent": 0,
    "returns": 0
  });

  useEffect(() => {
    loadData();
  }, [props.nickname]);

  const loadData = () => {
    fetch(`http://127.0.0.1:5000/users/${props.nickname}/orders`)
      .then(response => response.json())
      .then(data => {
        setOrdersData(data);
      });
  };

  return <Grid container
    spacing={1}
    borderRadius="20px"
    bgcolor="#ffffff"
    padding="10px"
    bgcolor={theme.palette.background.paper}>
    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography color={"textPrimary"} variant="h5">
            {t("orders")}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} padding="10px">
      {
        (ordersData['unpaid'] !== 0 && ordersData['unsent'] !== 0 && ordersData['returns'] !== 0) ?

          <Grid container spacing={2}>
            <Grid item xs={12} md={4} padding="10px">
              <OrderCategoryComponent name={t("unpaid")} link="/unpaid-orders" number={ordersData['unpaid']} />
            </Grid>
            <Grid item xs={12} md={4} padding="10px">
              <OrderCategoryComponent name={t("unsent")} link="/unsent-orders" number={ordersData['unsent']} />
            </Grid>
            <Grid item xs={12} md={4} padding="10px">
              <OrderCategoryComponent name={t("returns")} link="/returned-orders" number={ordersData['returns']} />
            </Grid>
          </Grid>
          : <Grid container spacing={2} justifyContent="center" paddingTop="10px">
            <Typography color={"textSecondary"} variant="h6">
              <b>{t("lackOfOrdersText")}</b>
            </Typography>
          </Grid>
      }
    </Grid>
  </Grid>;
}
