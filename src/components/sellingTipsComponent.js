import { useTranslation } from "react-i18next";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import i18n from "i18next";

export default function SellingTipsComponent() {
  const { t } = useTranslation();

  const [tips, setTips] = useState([
    { en: "Let's sell", pl: "Dawaj sprzedawaj" },
    { en: "Drink fervex", pl: "Pij fervex" },
    { en: "I'll sell the opel and slippers", pl: "Sprzedam opla i kapcie" }
  ]);
  const [tipIdx, setTipIdx] = useState(0);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={1}
          textAlign="center"
          backgroundColor="red"
          margin="auto"
          padding="10px"
        >
          <Grid item xs={12}>
            <h2>{t("sellingTips")}</h2>
          </Grid>
          <Grid item xs={12}>
            <topography variant="h1">
              {i18n.language === "en" ? tips[tipIdx].en : tips[tipIdx].pl}
            </topography>
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
      </Box>
    </div>
  );
}
