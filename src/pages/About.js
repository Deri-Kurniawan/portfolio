import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../components/Title";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Title set="About"/>

      <div className="About">
        <h2>{t("About")}</h2>
      </div>
    </>
  );
}
