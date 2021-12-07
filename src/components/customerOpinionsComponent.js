import React from "react";
import { useTranslation } from "react-i18next";

export default function CustomerOpinionsComponent() {
  const { t } = useTranslation();

  return <div>{t("customerOpinions")}</div>;
}
