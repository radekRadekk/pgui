import React from "react";
import { IconButton } from "@mui/material";
import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';
import SentimentNeutralRoundedIcon from '@mui/icons-material/SentimentNeutralRounded';
import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';
import { Box } from "@mui/material";
import { useTheme } from '@material-ui/core/styles';

export default function OpinionCategoriesButtonBox(props) {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.primary.main} borderRadius={3} >
      <IconButton size='small' onClick={() => props.setRank(3)} disabled={props.rank === 3}>
        <SentimentSatisfiedRoundedIcon />
      </IconButton>
      <IconButton size='small' onClick={() => props.setRank(2)} disabled={props.rank === 2}>
        <SentimentNeutralRoundedIcon />
      </IconButton>
      <IconButton size='small' onClick={() => props.setRank(1)} disabled={props.rank === 1}>
        <SentimentDissatisfiedRoundedIcon />
      </IconButton>
    </Box>
  );
}
