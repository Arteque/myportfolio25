import {
  faFolder,
  faHome,
  faInfo,
  faLayerGroup,
  faMessage,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Class from "./HeaderNav.module.scss";
import { useActiveSection } from "../../../Hooks/useActiveSection";

export const HeaderNav = () => {
  const sectionIds = [
    "hero",
    "skills",
    "projects",
    "section__services",
    "about",
    "contact-container",
  ];
  const activeId = useActiveSection(sectionIds);

  const navItems = [
    { href: "#hero", label: "Start", icon: faHome, id: "hero" },
    { href: "#skills", label: "Skills", icon: faLayerGroup, id: "skills" },
    { href: "#projects", label: "Projekte", icon: faFolder, id: "projects" },
    {
      href: "#section__services",
      label: "Leistungen",
      icon: faInfo,
      id: "section__services",
    },
    { href: "#about", label: "Über mich", icon: faUserAstronaut, id: "about" },
    {
      href: "#contact-container",
      label: "Kontakt",
      icon: faMessage,
      id: "contact-container",
    },
  ];

  return (
    <nav className={`${Class.mainNav} mainNav`} aria-label="Hauptnavigation">
      <ul className="mainNav__items" role="list">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              title={item.label}
              aria-label={item.label}
              aria-current={activeId === item.id ? "true" : undefined}
            >
              <span className={`${Class.icon} icon`} aria-hidden="true">
                <FontAwesomeIcon icon={item.icon} />
              </span>
              <span className={`${Class.text} text`}>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
