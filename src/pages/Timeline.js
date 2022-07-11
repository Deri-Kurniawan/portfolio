import React from "react";
import { useTranslation } from "react-i18next";

export default function Timeline() {
  const { t } = useTranslation();
  document.title = `${t("Timeline")} | ${t("Deri Kurniawan")}`;
  return (
    <div className="Timeline">
      <h2>{t("Timeline")}</h2>
    </div>
  );
}
