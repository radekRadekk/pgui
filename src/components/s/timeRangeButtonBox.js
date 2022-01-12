import React from "react";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TodayIcon from '@mui/icons-material/Today';
import TimerIcon from '@mui/icons-material/Timer';
import { IconButton } from "@mui/material";

import { Box } from "@mui/material";

export default function TimeRangeButtonBox(props) {
  return (
    <Box bgcolor="primary.main" borderRadius={2}>
      <IconButton size='small' onClick={props.previousWeekOnClick}>
        <TravelExploreIcon />
      </IconButton>
      <IconButton size='small' onClick={props.currentWeekOnClick}>
        <TodayIcon />
      </IconButton>
      <IconButton size='small' onClick={props.todayOnClick}>
        <TimerIcon />
      </IconButton>
    </Box>
  );
}
