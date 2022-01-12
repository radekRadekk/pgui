import React from "react";
import OpinionCategoriesButtonBox from "./s/opinionCategoriesButtonBox";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";

export default function CustomerOpinionsComponent() {
  const { t } = useTranslation();

  return <Grid container
    spacing={1}
    borderRadius="20px"
    bgcolor="#ffffff"
    padding="10px">
    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h5">
            {t("customerOpinions")}
          </Typography>
        </Grid>
        <Grid item pl={1}>
          <OpinionCategoriesButtonBox />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>Content</Grid>
  </Grid>;
}
