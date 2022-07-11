import i18next from "i18next";
import React, { useEffect } from "react";
import languages from "../locales/languages";
import cookies from "js-cookie";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "flag-icons/css/flag-icons.min.css";

function LanguageSwitch() {
  const languageCode = cookies.get("i18next") || "en";
  const flagCode = cookies.get("flag-code") || "gb";

  const onClickLang = (flag, code) => {
    i18next.changeLanguage(code);
    cookies.set("flag-code", flag);
  };

  useEffect(() => {
    document.body.dir =
      languages.find((lang) => lang.code === languageCode).dir || "ltr";
  }, [languageCode]);

  const DropdownTitle = () => {
    return (
      <span className={`fi fi-${flagCode}`}></span>
    );
  };

  return (
    <>
      <DropdownButton drop={"down"} title={<DropdownTitle />} id="collasible-nav-dropdown">
        {languages
        .sort((current, next) => current.name.localeCompare(next.name))
        .map(({ code, name, flag }, i) => (
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
