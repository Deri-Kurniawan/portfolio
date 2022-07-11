import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
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

export default Footer;
