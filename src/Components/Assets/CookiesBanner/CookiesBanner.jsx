import { useContext, useEffect, useState } from "react";
import { CookieContext } from "../../../Context/CookiesContext";
import Class from "./CookiesBanner.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import MarkdownLoader from "../Fragments/MarkdownLoader";
import { useTranslation } from "react-i18next";

const CookiesBanner = () => {
  const { t, i18n } = useTranslation();
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

    showBanner && setShowBanner(false);
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
      <MarkdownLoader mdsrc={t("cookieBanner.text")} />
      <div className="call">
        <button
          style={{ cursor: "pointer" }}
          className="call__full"
          onClick={acceptCookies}
        >
          {t("cookieBanner.buttons.annehmen")}
        </button>
        <button
          style={{ cursor: "pointer" }}
          className={`call__full`}
          onClick={clearAllData}
        >
          {t("cookieBanner.buttons.verweigern")}
        </button>
      </div>
    </div>
  );
};

export default CookiesBanner;
