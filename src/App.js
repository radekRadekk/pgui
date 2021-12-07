import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import {yellow, grey, purple, green, blue} from "material-ui/colors";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import SellingTipsComponent from "./components/sellingTipsComponent";
import SellingPlotComponent from "./components/sellingPlotComponent";
import OrdersComponent from "./components/ordersComponent";
import OffersRankComponent from "./components/offersRankComponent";
import CustomerOpinionsComponent from "./components/customerOpinionsComponent";
import NavbarComponent from "./components/navbarComponent";
import OpinionCategoriesButtonBox from "./components/s/opinionCategoriesButtonBox";


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
  const { t } = useTranslation();
  const [theme, setTheme] = useState(true);
  const appliedTheme = createTheme(theme ? light : dark);

  return (
    <ThemeProvider theme={appliedTheme}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setTheme(!theme);
          i18n.language === "en"
            ? i18n.changeLanguage("pl")
            : i18n.changeLanguage("en");
        }}>{t("orders")}</Button>
      <SellingTipsComponent />
      <SellingPlotComponent />
      <OrdersComponent />
      <OffersRankComponent />
      <CustomerOpinionsComponent />
    </ThemeProvider>
  );
}

export default App;
