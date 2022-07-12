import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="d-flex justify-content-center justify-center py-3">
        &copy;{t("Copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
