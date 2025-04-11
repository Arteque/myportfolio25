import { useContext, useEffect, useState } from "react";
import { CookieContext } from "../../../Context/CookiesContext";
import Class from "./CookiesBanner.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";

const CookiesBanner = () => {
  const { cookiesAccepted, acceptCookies, rejectCookies } =
    useContext(CookieContext);

  const [showBanner, setShowBanner] = useState(!cookiesAccepted);



  const clearAllData = () => {
    // Alle Cookies löschen
    document.cookie.split(";").forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    });

    // localStorage leeren
    localStorage.clear();

    // Optionale: SessionStorage auch leeren
    sessionStorage.clear();

    // Dann den Context informieren
    rejectCookies();

  
    showBanner && setShowBanner(false)

  };

  const openBannerHandler = (e) => {
    e.preventDefault();
    setShowBanner(cookiesAccepted);
  };


    // Sync local banner visibility with context state
    useEffect(() => {
      cookiesAccepted === "true" && setShowBanner(false);
    }, [cookiesAccepted]);

  if (!showBanner) {
    return (
      <div className={Class.cookies_container}>
        <button
          title="Cookies Einstellungen"
          onClick={openBannerHandler}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon
            icon={faFingerprint}
            size="3x"
            color="var(--clr-call-100)"
          />
        </button>
      </div>
    );
  }

  return (
    <div className={`${Class.cookies_container} border bg-bg-100 txt-txt-300 `}>
      <p>
        "Ich esse Keks, nom nom nom!"
        <br />
        🍪 Nur für Animationen und die
        YouTube-Videos! Nom nom nom! 🎥
      </p>
      <div className="call">
        <button className="call__full" onClick={acceptCookies}>
          Annehmen
        </button>
        <button className={`call__full`} onClick={clearAllData}>
          Verweigern
        </button>
      </div>
    </div>
  );
};

export default CookiesBanner;
