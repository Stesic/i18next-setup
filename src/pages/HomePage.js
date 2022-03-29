import React from "react";
import { useTranslation } from "react-i18next";

const german = "de-AT";
const english = "en-GB";
const romanian = "ro-RO";
const slovakian = "sk-SK";
const HomePage = () => {
  const { t, i18n } = useTranslation();

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="App">
      <div>{t("name")}</div>
      <button
        onClick={() => {
          handleLangChange(german);
        }}
      >
        German
      </button>
      <button
        onClick={() => {
          handleLangChange(english);
        }}
      >
        English
      </button>
      <button
        onClick={() => {
          handleLangChange(slovakian);
        }}
      >
        Slovakian
      </button>
      <button
        onClick={() => {
          handleLangChange(romanian);
        }}
      >
        Romanian
      </button>
    </div>
  );
};

export default HomePage;
