import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
  const { t } = useTranslation();
  document.title = `${t("Page Not Found")} | ${t("Deri Kurniawan")}`;

  return (
    <div className="PageNotFound">
      <div className="PageNotFound__container">
        <div className="PageNotFound__container-4cry4">
          <h1>
            4<span></span>4
          </h1>
        </div>

        <h2>{t("Oops! Page Not Be Found")}</h2>
        <p>
          {t(
            "Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable."
          )}
        </p>
        <Link to="/" className="btn btn-outline-primary">
          {t("Go Home")}
        </Link>
      </div>
    </div>
  );
}
