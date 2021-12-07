import React from "react";
import CustomerOpinionComponent from "./s/customerOpinionComponent";
import OpinionCategoriesButtonBox from "./s/opinionCategoriesButtonBox";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { Grid, Box, Item } from "@mui/material";

export default function CustomerOpinionsComponent() {
  const { t } = useTranslation();

  return <Grid container
    spacing={1}
    border={1} borderColor="red"
    margin="auto">
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="h5">
              {t("customerOpinions")}  
            </Typography>
          </Grid>
          <Grid item pl={1}>
            <OpinionCategoriesButtonBox/>
          </Grid> 
        </Grid>
      </Grid>
      <Grid item xs={12}>Content</Grid>
    </Grid>;
}
