import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export const HeaderNav = () => {
  return (
    <>
      <nav className="mainNav">
        <ul className="mainNav__items">
          <li>
            <Link to="#hero" role="link">
              <span className="icon">
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span className="text">Start</span>
            </Link>
            <Link to="#skills">
              <span className="text">Skills</span>
            </Link>
            <Link to="#about">
              <span className="text">Über mich</span>
            </Link>
            <Link to="#services">
              <span className="text">Leistungen</span>
            </Link>
            <Link to="#projects">
              <span className="text">Projekte</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
