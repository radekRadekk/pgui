import { ThemeProvider } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState, useEffect } from "react";
import SellingTipsComponent from "./components/sellingTips/sellingTipsComponent";
import SellingPlotComponent from "./components/sellingPlot/sellingPlotComponent";
import OrdersComponent from "./components/orders/ordersComponent";
import OffersRankComponent from "./components/offersRank/offersRankComponent";
import CustomerOpinionsComponent from "./components/customerOpinions/customerOpinionsComponent";
import Grid from "@mui/material/Grid";
import NavbarComponent from "./components/navbar/navbarComponent";
import {darkTheme, lightTheme} from "./themes";

function App() {
  const [theme, setTheme] = useState(true);
  const appliedTheme = createTheme(theme ? lightTheme : darkTheme);
  const [nickname, setNickname] = useState("")
  const [nicknamesList, setNicknamesList] = useState([])

  useEffect(() => {
    fetch(`http://127.0.0.1:5000//masterUsers/${localStorage.getItem('user')}/users`)
      .then(response => response.json())
      .then(data => {
        setNicknamesList(data["nicknames"]);
        setNickname(data["nicknames"][0])
      });

  }, []);

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: appliedTheme.palette.background.default }
        }}
      />
      <NavbarComponent nicknames={nicknamesList} currentNickname={nickname} setNickname={(nickname) => setNickname(nickname)} changeTheme={() => setTheme(!theme)}></NavbarComponent>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Grid container>
            <Grid item xs={12} padding="20px">
              <OrdersComponent nickname={nickname} />
            </Grid>
            <Grid item xs={12} padding="20px">
              <SellingPlotComponent nickname={nickname} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container>
            <Grid item xs={12} sm={6} md={12} padding="20px">
              <OffersRankComponent nickname={nickname} />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <Grid container>
                <Grid item xs={12} padding="20px">
                  <CustomerOpinionsComponent nickname={nickname} />
                </Grid>
                <Grid item xs={12} padding="20px">
                  <SellingTipsComponent />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
