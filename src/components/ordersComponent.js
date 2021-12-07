import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { Grid, Box, Item } from "@mui/material";
import OffersRankSortingButtonBox from "./s/offersRankSortingButtonBox";

export default function OrdersComponent() {
  const { t } = useTranslation();

  return <Grid container
  spacing={1}
  border={1} borderColor="red"
  margin="auto">
    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h5">
            {t("orders")}  
          </Typography>
        </Grid>
        <Grid item pl={0}>
        </Grid> 
      </Grid>
    </Grid>
    <Grid item xs={12}>Content</Grid>
  </Grid>;
}
