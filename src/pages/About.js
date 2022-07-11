import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  document.title = `${t("About")} | ${t("Deri Kurniawan")}`;

  return (
    <div className="About">
      <h2>{t("About")}</h2>
    </div>
  );
}
