import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  const { t } = useTranslation();
  document.title = `${t("Page Not Found")} | ${t("Deri Kurniawan")}`;

  return (
    <div className={styles.PageNotFound}>
      <div className={styles.container}>
        <div className={styles.container_fof_h1}>
          <h1 className={styles.container_fof_h1}>
            4<span className={styles.container_fof_h1_span}></span>4
          </h1>
        </div>
        <h2 className={styles.container_h2}>{t("Oops! Page Not Be Found")}</h2>
        <p className={styles.container_p}>
          {t(
            "Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable."
          )}
        </p>
        <Link to="/" className='btn btn-primary'>
          {t("Go Home")}
        </Link>
      </div>
    </div>
  );
}
