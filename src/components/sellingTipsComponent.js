import { useTranslation } from "react-i18next";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import i18n from "i18next";
import Typography from "@material-ui/core/Typography";
import { useTheme } from '@material-ui/core/styles';

export default function SellingTipsComponent() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [tips, setTips] = useState([
    {
      "pl": "",
      "en": ""
    }
  ]);
  const [tipIdx, setTipIdx] = useState(0);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/sellingTips`)
      .then(response => response.json())
      .then(data => {
        setTips(data["sellingTips"]);
      });
  }, [])

  return (
    <Grid container
      spacing={1}
      borderRadius="20px"
      bgcolor="#ffffff"
      padding="10px"
      bgcolor={theme.palette.background.paper}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography color="textPrimary" variant="h5">
              {t("sellingTips")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container align="center">
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="h6">
              {i18n.language === "en" ? tips[tipIdx]["en"] : tips[tipIdx]["pl"]}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setTipIdx((tipIdx + 1) % tips.length)}
            >
              {t("nextTip")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>);
}
