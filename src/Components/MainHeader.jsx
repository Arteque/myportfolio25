import { Link } from "react-router-dom";
import {
  faSun,
  faMoon,
  faSmile,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faMastodon,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import MainLogo from "./Assets/Fragments/MainLogo";
import Wrapper from "./Assets/Fragments/Wrapper";
import { toast } from "react-toastify";
import ToastLayout from "./Assets/ToastLayout/ToastLayout";
import { ToastSetup } from "../Tools/ToastSetup";

const MainHeader = () => {
  /*
        Color mode
    */

  const isSystemDarkmodeEnabeld =
    window.matchMedia &&
    window.matchMedia(`(prefers-color-scheme: dark)`).matches;

  const [colorMode, setColorMode] = useState();

  const darkOrLight = () => {
    let clrMode = "";
    isSystemDarkmodeEnabeld ? (clrMode = "dark") : (clrMode = "light");
    return clrMode;
  };

  const handleColorMode = () => {
    let clrMode = "";
    //check if localstorage has themeMode
    if (localStorage.getItem("themeMode")) {
      localStorage.getItem("themeMode") == "dark"
        ? (clrMode = "light")
        : (clrMode = "dark");
    } else {
      // if no themeMode found
      clrMode = darkOrLight() == "dark" ? "light" : "dark";
    }

    // after the check add the value to the localstorage themeMode item
    localStorage.setItem("themeMode", clrMode);

    // after the check change the state. this will trigger the useeffect at the end
    setColorMode(() => {
      return localStorage.getItem("themeMode") == "dark" ? true : false;
    });

    ToastSetup(
      "success",
      <FontAwesomeIcon icon={faThumbsUp} color="var(--txt-sub-100)" />,
      2000,
      false,
      false,
      false,
      false,
      clrMode,
      <ToastLayout
        message={`${colorMode ? "Lightmode" : "Darkmode"} ist aktiv!`}
      />
    );
  };

  // Run the first time calling the app.
  useEffect(() => {
    if (localStorage.getItem("themeMode")) {
      document.body.dataset.mode = localStorage.getItem("themeMode");
      setColorMode(() => {
        return localStorage.getItem("themeMode") == "dark" ? true : false;
      });
    } else {
      document.body.dataset.mode = darkOrLight();
      setColorMode(() => {
        return darkOrLight() == "dark" ? true : false;
      });
    }
  }, []);

  // run evrytime the color mode is changed and adding the data-mode to the body tag
  useEffect(() => {
    document.body.dataset.mode = colorMode ? "dark" : "light";
  }, [colorMode]);

  return (
    <>
      <header className="main-header">
        <Wrapper>
          <MainLogo position="header" />

          <ul className="main-header__socials">
            <li>
              <Link
                to="https://github.com/Arteque"
                target="_blank"
                title="Github"
                aria-label="Besuche mein Github-Profil"
              >
                <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                to="https://mastodon.social/@lemssiah"
                target="_blank"
                title="Mastodon"
                aria-label="Folge mir auf Mastodon"
              >
                <FontAwesomeIcon icon={faMastodon} aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/artt3k/"
                target="_blank"
                title="Instagram"
                aria-label="Folge mir auf Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.youtube.com/@artecke99999"
                target="_blank"
                title="Youtube"
                aria-label="Abonniere meinen Youtube-Kanal"
              >
                <FontAwesomeIcon icon={faYoutube} aria-hidden="true" />
              </Link>
            </li>
          </ul>

          <div className="main-header__color-mode">
            <button onClick={handleColorMode} aria-label="Farbmodus wechseln">
              <FontAwesomeIcon
                icon={faSun}
                className="sun"
                aria-hidden="true"
                focusable="false"
              />
              <FontAwesomeIcon
                icon={faMoon}
                className="moon"
                aria-hidden="true"
                focusable="false"
              />
            </button>
          </div>
        </Wrapper>
      </header>
    </>
  );
};

export default MainHeader;
