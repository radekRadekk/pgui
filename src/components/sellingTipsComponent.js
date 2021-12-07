import { useTranslation } from "react-i18next";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import i18n from "i18next";
import Typography from "@material-ui/core/Typography";


export default function SellingTipsComponent() {
  const { t } = useTranslation();

  const [tips, setTips] = useState([
    { en: "Let's sell", pl: "Dawaj sprzedawaj" },
    { en: "Drink fervex", pl: "Pij fervex" },
    { en: "I'll sell the opel and slippers", pl: "Sprzedam opla i kapcie" }
  ]);
  const [tipIdx, setTipIdx] = useState(0);

  return (
    <Grid container
      spacing={1}
      borderRadius="20px"
      bgcolor="#ffffff"
      margin="auto"
      padding="10px">
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="h5">
              {t("sellingTips")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container align="center">
          <Grid item xs={12}>
            <Typography variant="h6">
              {i18n.language === "en" ? tips[tipIdx].en : tips[tipIdx].pl}
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
