import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

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

import dateFormat from "../Tools/dateFormat";
import ProjectListing from "../Projects/Projects.json";
import Video from "../Components/Assets/Videos/Video";
import SectionHeader from "../Components/Assets/Fragments/SectionHeader";
import Contact from "../Components/Assets/Contact/Contact";
import Services from "../Components/Assets/Services/Services";
import About from "../Components/Assets/About/About";

import Project from "../Components/Assets/Fragments/Project";
import { ToastSetup } from "../Tools/ToastSetup";
import MarkdownLoader from "../Components/Assets/Fragments/MarkdownLoader";

const Start = () => {
  const { t, i18n } = useTranslation();

  const [sortProjects, setSortProjects] = useState(ProjectListing);
  const [maxProject, setMaxProject] = useState(10);
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
      localStorage.getItem("themeMode") || "dark",
      t("tostify.projects")
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
          a.title[i18n.language].localeCompare(b.title[i18n.language])
        );
        setSortProjects(newSort);
        break;
      case "ztoa":
        newSort = [...ProjectListing].sort((a, b) =>
          b.title[i18n.language].localeCompare(a.title[i18n.language])
        );
        setSortProjects(newSort);
        break;
      default:
        break;
    }
  }, [searchParams, t]);

  return (
    <>
      <Hero />

      <Services />

      <Section id="projects" classname="projects">
        <Wrapper>
          <SectionHeader title1={t("portfolio.title")} />

          {/* Projects Filter */}
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
          {/* Projects Filter */}

          {/* Projects Listing */}
          <div className="projects__content">
            {sortProjects ? (
              sortProjects.map(
                (project, index) =>
                  index <= maxProject && (
                    <div className="project" key={`t-${index}`}>
                      <Project
                        img={project.thumb}
                        imgUrlLiveWebsite={
                          project.urls[1].url && (
                            <Link
                              to={project.urls[1].url}
                              title={`${project.title[i18n.language]}`}
                              target="_blank"
                            ></Link>
                          )
                        }
                        title={project.title[i18n.language]}
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
                        content={
                          <MarkdownLoader
                            mdsrc={`${t(project.text.translation[i18n.language])}`}
                          />
                        }
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
        </Wrapper>
      </Section>

      <Section classname="about" id="about">
        <Wrapper>
          <SectionHeader title1={t("about.title")} />
          <About />
        </Wrapper>
      </Section>

      <Skills />

      <Section classname="contact" id="contact">
        <Wrapper>
          <SectionHeader title1={t("contact.title")} />
          <div className="section_content grid--2cols border">
            <div
              className="img_container"
              style={{
                width: "100%",
                padding: "2rem",
                position: "sticky",
                top: "100px",
                zIndex: 0,
              }}
            >
              <svg id="Ebene_1" data-name="Ebene 1" viewBox="0 0 430.44 364.92">
                <g id="Elems">
                  <path
                    d="M219.12,345.45v-5.89c89.54,0,162.39-72.85,162.39-162.39S308.66,14.77,219.12,14.77v-5.89c92.79,0,168.28,75.49,168.28,168.28s-75.49,168.28-168.28,168.28Z"
                    style={{ fill: " #f2f2f2" }}
                  />
                  <g>
                    <path
                      d="M430.44,187.83v65.26c0,1.31-.19,2.6-.56,3.78-1.62,5.38-6.58,9.28-12.5,9.28h-65.26c-7.23,0-13.06-5.84-13.06-13.07v-65.26c0-7.23,5.84-13.06,13.06-13.06h65.26c7.23,0,13.06,5.84,13.06,13.06Z"
                      style={{ fill: " #ce9625" }}
                    />
                    <path
                      d="M427.74,190.95l-.42,60.46c0,1.31-5.38-28.31-7.48-42.37-3.32-22.23-35.1-29.08-35.1-29.08l-11.4-2.08h41.33c7.23,0,13.06,5.84,13.06,13.06Z"
                      style={{ fill: " #d89417" }}
                    />
                    <rect
                      x="342.58"
                      y="248.61"
                      width="7.48"
                      height="7.17"
                      style={{ fill: " #eaaf50" }}
                    />
                    <path
                      d="M363.97,174.9s-15.99.4-20.15,6.51c-1.93,2.85-3.32,13.29-4.78,24.36v-17.95c0-7.23,5.84-13.06,13.06-13.06h16.16l-4.3.14Z"
                      style={{ fill: " #b5893a" }}
                    />
                    <path
                      d="M412.73,211.33v22.29c0,4.33-3.5,7.86-7.83,7.86l-12.39,8.73c-1.79,1.26-4.12-.6-3.28-2.62l2.51-6.11h-28.58c-4.34,0-7.86-3.52-7.86-7.86v-22.29c0-4.33,3.51-7.83,7.83-7.83h41.77c4.33,0,7.83,3.51,7.83,7.83Z"
                      style={{ fill: " #eeebf2" }}
                    />
                    <g>
                      <circle
                        cx="372.66"
                        cy="222.83"
                        r="5.02"
                        style={{ fill: " #b0aeb3" }}
                      />
                      <circle
                        cx="385.57"
                        cy="222.83"
                        r="5.02"
                        style={{ fill: " #b0aeb3" }}
                      />
                      <circle
                        cx="398.48"
                        cy="222.83"
                        r="5.02"
                        style={{ fill: " #b0aeb3" }}
                      />
                    </g>
                    <path
                      d="M357.16,225.47v3.88c0,5.5,4.46,9.96,9.96,9.96h2.87c2.29,0,3.48-2.71,1.95-4.4h-.75c-5.11-.02-9.27-4.09-9.4-9.2l-.05-2.01c-1.62-1.78-4.58-.63-4.58,1.77Z"
                      style={{ fill: " #e2dfe6" }}
                    />
                    <circle
                      cx="409.69"
                      cy="205.04"
                      r="7.74"
                      style={{ fill: " #e2dfe6; opacity: .45" }}
                    />
                  </g>
                  <g>
                    <path
                      d="M254.51,12.24c0,3.38-1.37,6.44-3.58,8.66-.28.28-.59.55-.89.8,1.74-2.11,2.8-4.83,2.8-7.78,0-3.39-1.38-6.45-3.59-8.66-2.21-2.21-5.27-3.58-8.65-3.58-2.94,0-5.64,1.04-7.76,2.75.25-.29.51-.58.78-.85,2.21-2.21,5.27-3.59,8.65-3.59s6.44,1.38,8.66,3.59c2.21,2.21,3.58,5.27,3.58,8.65Z"
                      style={{ fill: " #c6c51c" }}
                    />
                    <path
                      d="M252.84,13.92c0,2.95-1.06,5.67-2.8,7.78,0,.01-.01.02-.01.02-2.12,1.72-4.81,2.75-7.76,2.75-6.76,0-12.24-5.47-12.24-12.24,0-2.95,1.06-5.67,2.8-7.78v-.02c2.13-1.72,4.83-2.75,7.77-2.75,3.38,0,6.44,1.37,8.65,3.58,2.21,2.21,3.59,5.27,3.59,8.66Z"
                      style={{ fill: " #d1cb30" }}
                    />
                    <rect
                      x="234.03"
                      y="18.53"
                      width="2.43"
                      height="2.33"
                      rx=".36"
                      ry=".36"
                      style={{ fill: " #c6c51c" }}
                    />
                  </g>
                  <g>
                    <g>
                      <path
                        d="M404.39,105.44v38.15c0,.76-.11,1.52-.33,2.21-.95,3.14-3.85,5.43-7.31,5.43h-38.15c-4.23,0-7.64-3.41-7.64-7.64v-38.15c0-4.23,3.41-7.64,7.64-7.64h38.15c4.23,0,7.64,3.41,7.64,7.64Z"
                        style={{ fill: " #9bce1b" }}
                      />
                      <path
                        d="M402.82,107.26l-.24,35.34c0,.76-3.14-16.55-4.37-24.77-1.94-12.99-20.52-17-20.52-17l-6.67-1.21h24.16c4.23,0,7.64,3.41,7.64,7.64Z"
                        style={{ fill: " #b3d832" }}
                      />
                      <rect
                        x="353.04"
                        y="140.97"
                        width="4.37"
                        height="4.19"
                        style={{ fill: " #d6ea57" }}
                      />
                    </g>
                    <g>
                      <rect
                        x="365.31"
                        y="108.22"
                        width="23.37"
                        height="33.34"
                        rx=".58"
                        ry=".58"
                        style={{ fill: " #8e8e8e" }}
                      />
                      <rect
                        x="365.6"
                        y="108.6"
                        width="22.79"
                        height="32.61"
                        rx=".51"
                        ry=".51"
                        style={{ fill: " #f2f2f2" }}
                      />
                      <g>
                        <circle
                          cx="377"
                          cy="109.65"
                          r=".53"
                          style={{ fill: " #666" }}
                        />
                        <circle
                          cx="381.03"
                          cy="109.65"
                          r=".53"
                          style={{ fill: " #666" }}
                        />
                        <circle
                          cx="372.96"
                          cy="109.65"
                          r=".53"
                          style={{ fill: " #666" }}
                        />
                      </g>
                      <circle
                        cx="377"
                        cy="139.11"
                        r="1.73"
                        style={{ fill: " #666" }}
                      />
                    </g>
                  </g>
                  <g>
                    <path
                      d="M342.77,26.83v32.73c0,.66-.09,1.3-.28,1.9-.81,2.7-3.3,4.66-6.27,4.66h-32.73c-3.63,0-6.55-2.93-6.55-6.55V26.83c0-3.63,2.93-6.55,6.55-6.55h32.73c3.63,0,6.55,2.93,6.55,6.55Z"
                      style={{ fill: " #1eaece" }}
                    />
                    <path
                      d="M341.42,28.39l-.21,30.32c0,.66-2.7-14.2-3.75-21.25-1.67-11.15-17.6-14.58-17.6-14.58l-5.72-1.04h20.73c3.63,0,6.55,2.93,6.55,6.55Z"
                      style={{ fill: " #32c6d8" }}
                    />
                    <rect
                      x="298.71"
                      y="57.31"
                      width="3.75"
                      height="3.59"
                      style={{ fill: " #57e9ea" }}
                    />
                    <path
                      d="M309.44,20.35s-8.02.2-10.1,3.26c-.97,1.43-1.67,6.67-2.4,12.22v-9c0-3.63,2.93-6.55,6.55-6.55h8.1l-2.16.07Z"
                      style={{ fill: " #15a4b5" }}
                    />
                  </g>
                  <g>
                    <path
                      d="M257.25,324.07v29.86c0,.6-.09,1.19-.26,1.73-.74,2.46-3.01,4.25-5.72,4.25h-29.86c-3.31,0-5.98-2.67-5.98-5.98v-29.86c0-3.31,2.67-5.98,5.98-5.98h29.86c3.31,0,5.98,2.67,5.98,5.98Z"
                      style={{ fill: " #cec53b" }}
                    />
                    <path
                      d="M256.02,325.49l-.19,27.67c0,.6-2.46-12.95-3.42-19.39-1.52-10.17-16.06-13.31-16.06-13.31l-5.22-.95h18.91c3.31,0,5.98,2.67,5.98,5.98Z"
                      style={{ fill: " #d8cb32" }}
                    />
                    <rect
                      x="217.05"
                      y="351.88"
                      width="3.42"
                      height="3.28"
                      style={{ fill: " #eada57" }}
                    />
                    <path
                      d="M226.84,318.15s-7.32.18-9.22,2.98c-.88,1.3-1.52,6.08-2.19,11.15v-8.21c0-3.31,2.67-5.98,5.98-5.98h7.39l-1.97.06Z"
                      style={{ fill: " #b5a815" }}
                    />
                  </g>
                </g>
                <g id="dot" data-name="dot">
                  <path
                    d="M23.07,86.42c-5.9,0-10.71-4.8-10.71-10.7s4.8-10.7,10.71-10.7,10.71,4.8,10.71,10.7-4.8,10.7-10.71,10.7ZM23.07,71.02c-2.59,0-4.7,2.11-4.7,4.7s2.11,4.7,4.7,4.7,4.7-2.11,4.7-4.7-2.11-4.7-4.7-4.7Z"
                    style={{ fill: " #ce3a17" }}
                  />
                </g>
                <g id="dot-2" data-name="dot">
                  <path
                    d="M41.68,121.13c-3.44,0-6.52-2.45-7.18-5.96-.74-3.96,1.87-7.78,5.83-8.53,3.96-.74,7.79,1.87,8.53,5.83h0c.74,3.96-1.87,7.78-5.83,8.53-.45.08-.91.13-1.35.13ZM41.68,112.52c-.08,0-.16,0-.24.02-.7.13-1.17.82-1.04,1.52.13.71.81,1.16,1.52,1.04.7-.13,1.17-.82,1.04-1.52-.12-.62-.67-1.06-1.28-1.06Z"
                    style={{ fill: " #ce3a17" }}
                  />
                </g>
                <g id="dot-3" data-name="dot">
                  <path
                    d="M45.45,86.79c-2.67,0-4.84-2.17-4.84-4.84s2.17-4.84,4.84-4.84,4.84,2.17,4.84,4.84-2.17,4.84-4.84,4.84ZM45.45,80.79c-.64,0-1.16.52-1.16,1.16s.52,1.16,1.16,1.16,1.16-.52,1.16-1.16-.52-1.16-1.16-1.16Z"
                    style={{ fill: " #ce3a17" }}
                  />
                </g>
                <g id="dot-4" data-name="dot">
                  <path
                    d="M349.94,323.79c-5.9,0-10.7-4.8-10.7-10.7s4.8-10.71,10.7-10.71,10.7,4.8,10.7,10.71-4.8,10.7-10.7,10.7ZM349.94,308.38c-2.59,0-4.7,2.11-4.7,4.7s2.11,4.7,4.7,4.7,4.7-2.11,4.7-4.7-2.11-4.7-4.7-4.7Z"
                    style={{ fill: " #ce3a17" }}
                  />
                </g>
                <g id="dot-5" data-name="dot">
                  <path
                    d="M368.62,346c-4.03,0-7.3-3.28-7.3-7.3s3.28-7.3,7.3-7.3,7.3,3.28,7.3,7.3-3.28,7.3-7.3,7.3ZM368.62,337.39c-.72,0-1.3.59-1.3,1.3s.59,1.3,1.3,1.3,1.3-.59,1.3-1.3-.59-1.3-1.3-1.3Z"
                    style={{ fill: " #ce3a17" }}
                  />
                </g>
                <g id="dot-6" data-name="dot">
                  <path
                    d="M392.47,309.45c-2.67,0-4.84-2.17-4.84-4.84s2.17-4.84,4.84-4.84,4.84,2.17,4.84,4.84-2.17,4.84-4.84,4.84ZM392.47,303.44c-.64,0-1.16.52-1.16,1.16s.52,1.16,1.16,1.16,1.16-.52,1.16-1.16-.52-1.16-1.16-1.16Z"
                    style={{ fill: " #ce3a17" }}
                  />
                </g>
                <g id="Env">
                  <g>
                    <path
                      d="M208.75,5.13l125.58,110.91c8.49,7.5,9.28,20.46,1.78,28.95l-174.67,197.78c-7.5,8.49-20.45,9.31-28.94,1.81L6.92,233.66C2.24,229.53-.1,223.73,0,217.95c.07-4.71,1.75-9.44,5.12-13.25L179.79,6.92c3.36-3.81,7.84-6.07,12.51-6.72,5.72-.82,11.76.79,16.45,4.92Z"
                      style={{ fill: " #d6d3b6" }}
                    />
                    <path
                      d="M192.3.21l-1.5,12.09-20.18,162.54L8.7,215.75,0,217.95c.07-4.71,1.75-9.44,5.12-13.25L179.79,6.92c3.36-3.81,7.84-6.07,12.51-6.72Z"
                      style={{ fill: " #d6d3b6" }}
                    />
                    <polygon
                      points="192.3 .21 180.66 183.71 0 217.95 170.62 174.84 192.3 .21"
                      style={{ fill: " #b2ae90" }}
                    />
                    <path
                      d="M111.28,316.22l25.74,22.73c6.5,5.74,16.42,5.12,22.15-1.37l24.15-27.34c1.52-1.72-.63-4.21-2.55-2.96l-28.84,18.73c-.52.34-1.16.41-1.74.2l-36.93-13.32c-2.05-.74-3.61,1.89-1.98,3.34Z"
                      style={{ fill: " #b2ae90" }}
                    />
                    <path
                      d="M192.3.21l-1.5,12.09c-8.16,4.83-17.48,12.25-27.46,23.55L29.91,186.93c-10.33,11.7-17.02,21.16-21.21,28.81L0,217.95c.07-4.71,1.75-9.44,5.12-13.25L179.79,6.92c3.36-3.81,7.84-6.07,12.51-6.72Z"
                      style={{ fill: " #b2ae90" }}
                    />
                    <path
                      d="M239.18,41.61l97.9,86.46-85.31,96.6s58.13-72.2,38.85-102.03c-19.28-29.83-51.45-81.03-51.45-81.03Z"
                      style={{ fill: " #eae7d6" }}
                    />
                  </g>
                  <ellipse
                    cx="152.34"
                    cy="359.94"
                    rx="102.06"
                    ry="4.98"
                    style={{ fill: " #b3b3b3", opacity: "0.26" }}
                  />
                </g>
              </svg>
            </div>
            <Contact />
          </div>
        </Wrapper>
      </Section>

      <Section classname="media-section" id="media-section">
        <Wrapper>
          <SectionHeader title1={t("videos.title")} />
          <Video />
        </Wrapper>
      </Section>
    </>
  );
};

export default Start;
