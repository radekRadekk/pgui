import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import OffersRankSortingButtonBox from "./s/offersRankSortingButtonBox";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@material-ui/core/styles';

export default function OffersRankComponent() {
  const { t } = useTranslation();
  const theme = useTheme();

  const offers = [
    {
      "name": "Prodiż",
      "quantity": 80
    },
    {
      "name": "Samowar",
      "quantity": 67
    },
    {
      "name": "Gable",
      "quantity": 60
    },
    {
      "name": "Kociołek 15l",
      "quantity": 45
    },
    {
      "name": "Pług dwuskibowy",
      "quantity": 6
    }
  ]

  return (
  <Grid container
    spacing={1}
    borderRadius="20px"
    padding="10px"
    bgcolor={theme.palette.background.paper}>
    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography color={"textPrimary"} variant="h5">
            {t("offersRank")}
          </Typography>
        </Grid>
        <Grid item pl={1}>
          <OffersRankSortingButtonBox />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <TableContainer>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="body1" sx={{ fontWeight: 'bold' }}>
                  <b>{t("name")}</b>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="body1" sx={{ fontWeight: 'bold' }}>
                  <b>{t("quantity")}</b>
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {offers.map((offer, idx) => (
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell width={"175px"}>
                  <Typography color="textSecondary" variant="body1">
                    {offer.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="body1">
                    {offer.quantity}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </Grid>);
}
