import React from "react";
import { IconButton } from "@mui/material";
import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';
import SentimentNeutralRoundedIcon from '@mui/icons-material/SentimentNeutralRounded';
import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';
import { Grid, Box, Item } from "@mui/material";

export default function OpinionCategoriesButtonBox(props) {
  return (
    <Box bgcolor="primary.main" borderRadius={3} >
      <IconButton size = 'small' onClick={props.onHappyClick}>
        <SentimentSatisfiedRoundedIcon />
      </IconButton>
      <IconButton size = 'small' onClick={props.onNeutralClick}>
        <SentimentNeutralRoundedIcon  />
      </IconButton>
      <IconButton size = 'small' onClick={props.onSadClick}>
        <SentimentDissatisfiedRoundedIcon />
      </IconButton>
    </Box>
  );
}
