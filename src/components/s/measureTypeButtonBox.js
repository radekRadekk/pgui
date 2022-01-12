import React from "react";
import { IconButton } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import { Box } from "@mui/material";

export default function MeasureTypeButtonBox(props) {
  return (
    <Box bgcolor="primary.main" borderRadius={2}>
      <IconButton size='small' onClick={props.moneyOnClick}>
        <AttachMoneyIcon />
      </IconButton>
      <IconButton size='small' onClick={props.pieceOnClick}>
        <ViewDayIcon />
      </IconButton>
    </Box>
  );
}
