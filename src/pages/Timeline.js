import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../components/Title";

export default function Timeline() {
  const { t } = useTranslation();

  return (
    <>
      <Title set="Timeline"/>

      <div className="Timeline">
        <h2>{t("Timeline")}</h2>
      </div>
    </>
  );
}
