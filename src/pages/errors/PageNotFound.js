import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
  const { t } = useTranslation();
  document.title = `${t("PageNotFound")} | ${t('Deri Kurniawan')}`;

  return (
    <div className="PageNotFound">
      <div className="PageNotFound__container">
        <div className="PageNotFound__container-4cry4">
          <h1>
            4<span></span>4
          </h1>
        </div>

        <h2>{t("PageNotFound-Oops")}</h2>
        <p>{t("PageNotFound-Sorry")}</p>
        <Link to="/" className="btn btn-outline-primary">
          {t("PageNotfound-GoHome")}
        </Link>
      </div>
    </div>
  );
}
