import Class from './ColorMode.module.scss'
import { useEffect, useState } from "react";

import {
  faSun,
  faMoon,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ToastLayout from "../ToastLayout/ToastLayout";
import { ToastSetup } from "../../../Tools/ToastSetup"

const ColorMode = () => {
  /*
        Color mode
    */

  const isSystemDarkmodeEnabeld = () => {
    if(window.matchMedia) return window.matchMedia(`(prefers-color-scheme: dark)`).matches;
    return false
  }
   

  const [colorMode, setColorMode] = useState();

  const darkOrLight = () => {
    let clrMode = "";
    isSystemDarkmodeEnabeld() ? (clrMode = "dark") : (clrMode = "light");
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
    <div className={Class.main_header__color_mode}>
      <button onClick={handleColorMode} aria-label="Farbmodus wechseln">
        <FontAwesomeIcon
          icon={faSun}
          className={Class.sun}
          aria-hidden="true"
          focusable="false"
        />
        <FontAwesomeIcon
          icon={faMoon}
          className={Class.moon}
          aria-hidden="true"
          focusable="false"
        />
      </button>
    </div>
  );
};

export default ColorMode;
