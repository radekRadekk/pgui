import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import OffersRankSortingButtonBox from "./s/offersRankSortingButtonBox";

export default function OffersRankComponent() {
  const { t } = useTranslation();

  return (<Grid container
    spacing={1}
    borderRadius="20px"
    bgcolor="#ffffff"
    padding="10px">
    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h5">
            {t("offersRank")}
          </Typography>
        </Grid>
        <Grid item pl={1}>
          <OffersRankSortingButtonBox />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>Content</Grid>
  </Grid>);
}
