import { faFolder, faHome, faInfo, faLayerGroup, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Class from "./HeaderNav.module.scss"

export const HeaderNav = () => {
  return (
    <>
      <nav className={`${Class.mainNav} mainNav`} aria-label="Hauptnavigation">
        <ul className="mainNav__items" role="list">
          <li>
            <a href="#hero">
              <span className={`${Class.icon} icon`} aria-hidden="true">
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span className={`${Class.text} text`}>Start</span>
            </a>
          </li>
          <li>
            <a href="#skills">
              <span className={`${Class.icon} icon`} area-hidden="true">
                <FontAwesomeIcon icon={faLayerGroup} />
              </span>
              <span className={`${Class.text} text`}>Skills</span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <span className={`${Class.icon} icon`} area-hidden="true">
                <FontAwesomeIcon icon={faFolder} />
              </span>
              <span className={`${Class.text} text`}>Projekte</span>
            </a>
          </li>
          <li>
              <a href="#section__services">
                <span className={`${Class.icon} icon`} area-hidden="true">
                <FontAwesomeIcon icon={faInfo} />
              </span>
                <span className={`${Class.text} text`}>Leistungen</span>
              </a>
            </li>
          <li>
            <a href="#about">
              <span className={`${Class.icon} icon`} area-hidden="true">
                <FontAwesomeIcon icon={faUserAstronaut} />
              </span>
              <span className={`${Class.text} text`}>Über mich</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
