import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { grey, green, blue } from "material-ui/colors";

import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react";

import SellingTipsComponent from "./components/sellingTipsComponent";
import SellingPlotComponent from "./components/sellingPlotComponent";
import OrdersComponent from "./components/ordersComponent";
import OffersRankComponent from "./components/offersRankComponent";
import CustomerOpinionsComponent from "./components/customerOpinionsComponent";
import Grid from "@mui/material/Grid";
import NavbarComponent from "./components/navbarComponent";
import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { amber } from "@material-ui/core/colors";

export const light = {
  palette: {
    type: "light",
    primary: {
      main: blue[200],
      background: {
        default: "#e4f0e2"
      }
    },
  }
};

export const dark = {
  palette: {
    type: "dark",
    primary: {
      main: green[200]
    },
    background: {
      default: "#222222"
    },
    contrastText: green[200],
  }

};



function App() {
  const [theme, setTheme] = useState(true);
  const appliedTheme = createTheme(theme ? light : dark);
  const [nickname, setNickname] = useState("JanKowalski")
  

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <NavbarComponent changeTheme={() => setTheme(!theme)}></NavbarComponent>
      <Grid container align="center" justifyContent="center" spacing={0} bgcolor="#bdbdbd">
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
              <OffersRankComponent />
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
