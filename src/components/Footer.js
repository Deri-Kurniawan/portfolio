import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div>
        <p className="text-center">
          &copy;{t("Copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
