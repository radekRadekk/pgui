import React, { useState, useEffect } from "react";
import OpinionCategoriesButtonBox from "./s/opinionCategoriesButtonBox";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function CustomerOpinionsComponent(props) {
  const { t } = useTranslation();
  const [rank, setRank] = useState(2)
  const [opinions, setOpinions] = useState([])

  const loadData = (rank) => {
    fetch(`http://127.0.0.1:5000/users/${props.nickname}/customersOpinions?rank=${rank}`)
      .then(response => response.json())
      .then(data => {
        setOpinions(data["opinions"]);
      });
  }

  useEffect(() => {
    loadData(rank);
  }, [rank, props.nickname])

  return <Grid container
    spacing={1}
    borderRadius="20px"
    bgcolor="#ffffff"
    padding="10px">
    <Grid item xs={12}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h5">
            {t("customerOpinions")}
          </Typography>
        </Grid>
        <Grid item pl={1}>
          <OpinionCategoriesButtonBox setRank={setRank} rank={rank}/>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      {
        opinions.length === 0 ?
          <Grid container spacing={2} justifyContent="center" paddingTop="10px">
            <Typography variant="h6">
              <b>{t("lackOfOpinionsText")}</b>
            </Typography>
          </Grid>
          :
          <TableContainer>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><b>{t("mark")}</b></TableCell>
                  <TableCell><b>{t("text")}</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {opinions.map((opinion, idx) => (
                  <TableRow
                    key={idx}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" width={"40px"}>{opinion.mark}</TableCell>
                    <TableCell>{opinion.text}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      }
    </Grid>
  </Grid>;
}
