import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function NavbarComponent() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(true);

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{
        borderRadius: "20px",
        background: "gray"
      }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PGUI
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setTheme(!theme);
              i18n.language === "en"
                ? i18n.changeLanguage("pl")
                : i18n.changeLanguage("en");
            }}>{t("changeLanguage")}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
