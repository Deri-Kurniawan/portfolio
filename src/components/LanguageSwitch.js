import i18next from "i18next";
import React, { useEffect } from "react";
import languages from "../locales/languages";
import cookies from "js-cookie";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "flag-icons/css/flag-icons.min.css";
import { useTranslation } from "react-i18next";

function LanguageSwitch() {
  const languageCode = cookies.get("i18next") || "en";
  const flagCode = cookies.get("flag-code") || "gb";

  const { t } = useTranslation();

  const onClickLang = (flag, code) => {
    i18next.changeLanguage(code);
    cookies.set("flag-code", flag);
  };

  useEffect(() => {
    document.body.dir =
      languages.find((lang) => lang.code === languageCode).dir || "ltr";
  }, [languageCode]);

  const DropDownTitle = () => {
    return (
      <>
        <span className={`fi fi-${flagCode}`}></span> {t("Languages")}
      </>
    );
  };

  return (
    <>
      <DropdownButton drop={"down"} title={<DropDownTitle />} id="collasible-nav-dropdown">
        {languages.map(({ code, name, flag }, i) => (
          <Dropdown.Item
            key={i}
            value={code}
            onClick={() => onClickLang(flag, code)}
            disabled={code === languageCode}
          >
            <span className={`fi fi-${flag}`}></span> {name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
}

export default LanguageSwitch;
