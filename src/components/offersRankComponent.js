import React from "react";
import { useTranslation } from "react-i18next";

export default function OffersRankComponent() {
  const { t } = useTranslation();

  return <div>{t("offersRank")}</div>;
}
