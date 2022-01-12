import React from "react";
import { IconButton } from "@mui/material";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Box } from "@mui/material";

export default function ChartTypeButtonBox(props) {
  return (
    <Box bgcolor="primary.main" borderRadius={2}>
      <IconButton size='small' onClick={props.lineOnClick} disabled={props.lineDisabled}>
        <ShowChartIcon />
      </IconButton>
      <IconButton size='small' onClick={props.barOnClick} disabled={props.barDisabled}>
        <BarChartIcon />
      </IconButton>
    </Box>
  );
}
