import React from "react";
import { useTranslation } from "react-i18next";
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className={`${styles.root} d-flex justify-content-center justify-center py-3`}>
        <span className='text-center'>&copy;{t("Copyright", { year: new Date().getFullYear() })}</span>
      </div>
    </footer>
  );
}
