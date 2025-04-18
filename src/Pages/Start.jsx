import Skills from "../Components/Assets/Skills/Skills";
import Hero from "../Components/Assets/Hero/Hero";
import Section from "../Components/Assets/Fragments/Section";
import Wrapper from "../Components/Assets/Fragments/Wrapper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowDownAZ,
  faArrowDownZA,
  faArrowUp,
  faCalendarAlt,
  faFilter,
  faTag,
  faLanguage,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Project from "../Components/Assets/Fragments/Project";
import dateFormat from "../Tools/dateFormat";
import ProjectListing from "../Projects/Projects.json";
import Video from "../Components/Assets/Videos/Video";
import SectionHeader from "../Components/Assets/Fragments/SectionHeader";
import Contact from "../Components/Assets/Contact/Contact";
import Services from "../Components/Assets/Services/Services";
import About from "../Components/Assets/About/About";
import { ToastSetup } from "../Tools/ToastSetup";

const Start = () => {
  const [sortProjects, setSortProjects] = useState(ProjectListing);
  const [maxProject, setMaxProject] = useState(3);
  const [projectsFilter, setProjectsfilter] = useState({
    sort: "datedown",
  });
  const [searchParams, setSearchParamas] = useSearchParams();

  // ProjectsFilter CLickEvents
  const clickedFilterHandler = (event) => {
    const getTargetDataset = event.target.dataset.sort;

    const currentClassNameToDel = event.target.parentElement.parentElement;

    currentClassNameToDel.querySelector(".filter__item.current") &&
      currentClassNameToDel
        .querySelector(".filter__item.current")
        .classList.remove("current");

    event.target.parentElement.classList.add("current");

    setProjectsfilter({
      sort: getTargetDataset,
    });
  };

  useEffect(() => {
    setSearchParamas({ sort: projectsFilter.sort });
    ToastSetup(
      "success",
      <FontAwesomeIcon icon={faThumbsUp} color="orangered" />,
      1000,
      false,
      false,
      true,
      false,
      "light",
      "Die Projektliste wurde angepasst!"
    );
  }, [projectsFilter]);

  useEffect(() => {
    let newSort = "";
    const getSearchParams = searchParams.get("sort");
    // console.log(getSearchParams)

    switch (getSearchParams) {
      case "datedown":
        newSort = [...ProjectListing].sort((a, b) => {
          const aDateTime = new Date(a.date).getTime();
          const bDateTime = new Date(b.date).getTime();
          return bDateTime - aDateTime;
        });
        setSortProjects(newSort);
        break;
      case "dateup":
        newSort = [...ProjectListing].sort((a, b) => {
          const aDateTime = new Date(a.date).getTime();
          const bDateTime = new Date(b.date).getTime();
          return aDateTime - bDateTime;
        });
        setSortProjects(newSort);
        break;
      case "atoz":
        newSort = [...ProjectListing].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setSortProjects(newSort);
        break;
      case "ztoa":
        newSort = [...ProjectListing].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        setSortProjects(newSort);
        break;
      default:
        break;
    }
  }, [searchParams]);

  const showProjectHandler = (e) => {
    e.preventDefault();
    setMaxProject((prev) => prev + 1);
    maxProject >= sortProjects.length && e.target.parentElement.remove();
  };

  return (
    <>
      <Hero />

      <Skills />

      <Services />

      <Section id="projects" classname="projects">
        <Wrapper>
          <SectionHeader title1="Meine" title2="Projekte" />
          <div className="projects__filter">
            <FontAwesomeIcon icon={faFilter} size="1x" />
            <ul
              className="filter__items"
              onClick={(e) => {
                clickedFilterHandler(e);
              }}
            >
              <li className="filter__item atoz">
                <button
                  data-sort="atoz"
                  aria-label="Projekt von A nach Z alphabetisch sortieren"
                >
                  <FontAwesomeIcon icon={faArrowDownAZ} size="2x" />
                </button>
              </li>

              <li className="filter__item ztoa">
                <button
                  data-sort="ztoa"
                  aria-label="Projekt von Z nach A alphabetisch sortieren"
                >
                  <FontAwesomeIcon icon={faArrowDownZA} size="2x" />
                </button>
              </li>

              <li className="filter__item dateup">
                <button
                  data-sort="dateup"
                  aria-label="Projekte nach Datum aufsteigend sortieren"
                >
                  <FontAwesomeIcon icon={faArrowUp} size="1x" />
                  <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
                </button>
              </li>

              <li className="filter__item datedown current">
                <button
                  data-sort="datedown"
                  aria-label="Projekte nach Datum absteigend sortieren"
                >
                  <FontAwesomeIcon icon={faArrowDown} size="1x" />
                  <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
                </button>
              </li>
            </ul>
          </div>
          <div className="projects__content">
            {sortProjects ? (
              sortProjects.map(
                (project, index) =>
                  index <= maxProject && (
                    <div className="project" key={`${project.title}-${index}`}>
                      <Project
                        img={project.thumb}
                        imgUrlLiveWebsite={
                          project.urls[1].url && (
                            <Link
                              to={project.urls[1].url}
                              title={`${project.title} extern öffnen`}
                              target="_blank"
                            ></Link>
                          )
                        }
                        title={project.title}
                        subtitle={project.subtitle}
                        date={dateFormat(project.date)}
                        language={
                          project.lang &&
                          project.lang.map((lan, i) => (
                            <span key={`${lan}-${i}`}>
                              {" "}
                              <FontAwesomeIcon icon={faLanguage} />{" "}
                              {lan.toUpperCase()}
                            </span>
                          ))
                        }
                        urls={
                          project.urls &&
                          project.urls.map((el, i) => (
                            <Link
                              className="call__full right__fadein"
                              to={el.url}
                              title={el.name}
                              key={`${el.id}-${i}`}
                              target="_blank"
                              style={{ padding: 0 }}
                            >
                              <img
                                src={`./Icons/${el.icon}.svg`}
                                alt={el.name}
                              />
                            </Link>
                          ))
                        }
                        content={project.teaser}
                        tags={project.tags.map((el, i) => (
                          <li key={i}>
                            <FontAwesomeIcon icon={faTag} /> {el}
                          </li>
                        ))}
                      />
                    </div>
                  )
              )
            ) : (
              <p>No Projects</p>
            )}
          </div>
          <div className="call">
            <button
              className="call__full"
              onClick={showProjectHandler}
              aria-label="Zeige mehr Projekte"
            >
              Zeige mehr Projekte
            </button>
          </div>
        </Wrapper>
      </Section>
      <Section classname="contact" id="contact">
        <Wrapper>
          <SectionHeader title1="Mehr über mich & " title2="Kontakt" />
          <div className="section_content grid--2cols">
            <About />
            <Contact />
          </div>
        </Wrapper>
      </Section>
      <Section classname="media-section" id="media-section">
        <Wrapper>
          <SectionHeader
            title1="Schon so weit gescrollt? 😉"
            title2=" Hier ein kleines Extra für dich:"
          />
          <p>Timelapse: Digitales Zeichnen & Fotomontagen 🎨🖼️</p>
          <Video />
        </Wrapper>
      </Section>
    </>
  );
};

export default Start;
