import React from "react";
import { IconButton } from "@mui/material";
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { Box } from "@mui/material";
import { useTheme } from '@material-ui/core/styles';

export default function OffersRankSortingButtonBox(props) {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.primary.main} borderRadius={3}>
      <IconButton size='small' onClick={props.onUpClick}>
        <ArrowCircleUpRoundedIcon />
      </IconButton>
      <IconButton size='small' onClick={props.onDownClick}>
        <ArrowDropDownCircleIcon />
      </IconButton>
    </Box>
  );
}
