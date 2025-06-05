import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();

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
    {
      href: "#hero",
      label: t("header.nav.links.hero.text"),
      title: t("header.nav.links.hero.title"),
      icon: faHome,
      id: "hero",
    },
    {
      href: "#skills",
      label: t("header.nav.links.skills.text"),
      title: t("header.nav.links.skills.title"),
      icon: faLayerGroup,
      id: "skills",
    },
    {
      href: "#projects",
      label: t("header.nav.links.projects.text"),
      title: t("header.nav.links.projects.title"),
      icon: faFolder,
      id: "projects",
    },
    {
      href: "#section__services",
      label: t("header.nav.links.services.text"),
      title: t("header.nav.links.services.title"),
      icon: faInfo,
      id: "section__services",
    },
    {
      href: "#about",
      label: t("header.nav.links.about.text"),
      title: t("header.nav.links.about.title"),
      icon: faUserAstronaut,
      id: "about",
    },
    {
      href: "#contact-container",
      label: t("header.nav.links.contact.text"),
      title: t("header.nav.links.contact.title"),
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
              title={item.title}
              aria-label={item.label}
              aria-current={activeId === item.id ? "true" : ""}
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
