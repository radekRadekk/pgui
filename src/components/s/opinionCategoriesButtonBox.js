import React from "react";
import { IconButton } from "@mui/material";
// import {
//   SentimentNeutralRoundedIcon,
//   SentimentDissatisfiedRoundedIcon,
//   SentimentSatisfiedRoundedIcon
// } from "@mui/icons-material";
import { Grid, Box, Item } from "@mui/material";

export default function OpinionCategoriesButtonBox() {
  return (
    <Grid container spacing={3}>
      <Grid item xs="auto">
        <IconButton>
          {/* <SentimentSatisfiedRoundedIcon /> */}
        </IconButton>
      </Grid>
      <Grid item xs="auto">
        <IconButton>
          {/* <SentimentNeutralRoundedIcon /> */}
        </IconButton>
      </Grid>
      <Grid item xs="auto">
        <IconButton>
          {/* <SentimentDissatisfiedRoundedIcon /> */}
        </IconButton>
      </Grid>
    </Grid>
  );
}
