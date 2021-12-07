import React from "react";
import { useTranslation } from "react-i18next";

export default function OrdersComponent() {
  const { t } = useTranslation();

  return <div>{t("orders")}</div>;
}
