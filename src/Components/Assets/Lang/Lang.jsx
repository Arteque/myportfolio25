import { useTranslation } from "react-i18next";
import Class from "./Lang.module.scss";

import { useState, useEffect } from "react";


const Lang = () => {

  const {t, i18n} = useTranslation()

  const [currentLang, setCurrentLang] = useState(localStorage.getItem("lang") ? localStorage.getItem("lang") : "de");
  const [flag, setFlag] = useState(`/Icons/${currentLang}.svg`);
  const [langMenu, setLangMenu] = useState(false);



  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const setCurrentLangHandler = (e) => {
    e.preventDefault()
    const lang = e.target.dataset.value
    setCurrentLang(String(lang))
    
  }

  useEffect(() =>{
    const l = localStorage.getItem("lang") ? localStorage.getItem("lang") : "de"
    setCurrentLang(l)
    setFlag(`/Icons/${l}.svg`)
    changeLanguage(currentLang)
  },[])


 useEffect(() => {
    localStorage.setItem("lang", currentLang)
    setFlag(`/Icons/${currentLang}.svg`)
    document.documentElement.lang = currentLang
    changeLanguage(currentLang)
 },[currentLang]) 


  return (
    <div className={Class.lang} id="lang" area-label="lang">

      <button
        title="Sprache wählen"
        className={Class.choosenImg}
        onClick={() => setLangMenu(!langMenu)}
        style={{backgroundImage:`url(${flag})`}}
      >
      </button>
      <ul
        className={Class.langList + (langMenu ? ` ${Class.open}` : "")}
        onClick={() => setLangMenu(!langMenu)}
      >
        <li
          data-value="de"
          className={currentLang === "de" ?  Class.current : ""}
          onClick={setCurrentLangHandler}
          title="Deutsch"
        >
          <img src="/Icons/de.svg" alt="Detusch" />
        </li>
        <li
          data-value="fr"
          className={currentLang === "fr" ? Class.current : ""}
          onClick={setCurrentLangHandler}
          title="Français"
        >
          <img src="/Icons/fr.svg" alt="Français" />
        </li>
        <li
          data-value="en"
          className={currentLang === "en" ? Class.current : ""}
          onClick={setCurrentLangHandler}
          title="English"
        >
          <img src="/Icons/en.svg" alt="English" />
        </li>
      </ul>
    </div>
  );
};

export default Lang;
