import Class from "./Lang.module.scss";

import { useState, useEffect } from "react";


const Lang = () => {

  const [currentLang, setCurrentLang] = useState("de");
  const [flag, setFlag] = useState("/Icons/de.svg");
  const [langMenu, setLangMenu] = useState(false);


  useEffect(() =>{
    const l = localStorage.getItem("lang") ? localStorage.getItem("lang") : "de"
    setCurrentLang(l)
    setFlag(`/Icons/${l}.svg`)
  },[])


 useEffect(() => {
    localStorage.setItem("lang", currentLang)
    setFlag(`/Icons/${currentLang}.svg`)
    document.documentElement.lang = currentLang
 },[currentLang]) 


  return (
    <div className={Class.lang} id="lang" area-label="lang">

      <button
      
        className={Class.choosenImg}
        onClick={() => setLangMenu(!langMenu)}
        style={{backgroundImage:`url(${flag})`}}
      >
       {/* <img src={flag} alt="flag" /> */}
      </button>
      <ul
        className={Class.langList + (langMenu ? ` ${Class.open}` : "")}
        onClick={() => setLangMenu(!langMenu)}
      >
        <li
          datavalue="de"
          className={currentLang === "de" && Class.current}
          onClick={() => setCurrentLang("de")}
        >
          <img src="/Icons/de.svg" alt="Detusch" />
        </li>
        <li
          datavalue="fr"
          className={currentLang === "fr" && Class.current}
          onClick={() => setCurrentLang("fr")}
        >
          <img src="/Icons/fr.svg" alt="Français" />
        </li>
        <li
          datavalue="en"
          className={currentLang === "en" && Class.current}
          onClick={() => setCurrentLang("en")}
        >
          <img src="/Icons/en.svg" alt="English" />
        </li>
      </ul>
    </div>
  );
};

export default Lang;
