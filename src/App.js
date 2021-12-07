import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { grey, green, blue } from "material-ui/colors";
import React, { useState } from "react";

import SellingTipsComponent from "./components/sellingTipsComponent";
import SellingPlotComponent from "./components/sellingPlotComponent";
import OrdersComponent from "./components/ordersComponent";
import OffersRankComponent from "./components/offersRankComponent";
import CustomerOpinionsComponent from "./components/customerOpinionsComponent";
import Grid from "@mui/material/Grid";
import NavbarComponent from "./components/navbarComponent";

export const light = {
  palette: {
    type: "light",
    primary: {
      main: green[500]
    },
    secondary: {
      main: grey[500]
    }
  }
};

export const dark = {
  palette: {
    type: "dark",
    primary: {
      main: blue[500]
    },
    secondary: {
      main: grey[500]
    }
  }
};

function App() {
  const [theme, setTheme] = useState(true);
  const appliedTheme = createTheme(theme ? light : dark);

  return (
    <ThemeProvider theme={appliedTheme}>
      <NavbarComponent padding="10px" ></NavbarComponent>
      <Grid container
        borderRadius="20px"
        bgcolor="#bdbdbd"
      >
        <Grid item xs={12}>
          <Grid container align="center">
            <Grid item xs={12} padding="5px" margin="10px">
              <SellingTipsComponent />
            </Grid>
            <Grid item xs={12} padding="5px" margin="10px">
              <SellingPlotComponent />
            </Grid>
            <Grid item xs={12} padding="5px" margin="10px">
              <OrdersComponent />
            </Grid>
            <Grid item xs={12} padding="5px" margin="10px">
              <OffersRankComponent />
            </Grid>
            <Grid item xs={12} padding="5px" margin="10px">
              <CustomerOpinionsComponent />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
