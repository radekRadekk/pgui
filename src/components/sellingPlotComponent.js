import React from "react";
import { useTranslation } from "react-i18next";

export default function SellingPlotComponent() {
  const { t } = useTranslation();

  return <div>{t("sellingPlot")}</div>;
}
