import React from "react";
import { IconButton } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import { Box } from "@mui/material";
import { useTheme } from '@material-ui/core/styles';

export default function MeasureTypeButtonBox(props) {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.primary.main} borderRadius={2}>
      <IconButton size='small' onClick={props.moneyOnClick} disabled={props.moneyDisabled}>
        <AttachMoneyIcon />
      </IconButton>
      <IconButton size='small' onClick={props.pieceOnClick} disabled={props.pieceDisabled}>
        <ViewDayIcon />
      </IconButton>
    </Box>
  );
}
