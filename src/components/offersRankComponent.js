import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import OffersRankSortingButtonBox from "./s/offersRankSortingButtonBox";
import { useTheme } from '@material-ui/core/styles';

export default function OffersRankComponent() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (<Grid container
    spacing={1}
    borderRadius="20px"
    bgcolor="#ffffff"
    padding="10px"
    bgcolor={theme.palette.background.paper}>
    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography color={"textPrimary"} variant="h5">
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
