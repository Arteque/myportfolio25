import Skills from "../Components/Assets/Skills/Skills"
import Hero from "../Components/Assets/Hero/Hero"
import Section from "../Components/Assets/Fragments/Section"
import Wrapper from "../Components/Assets/Fragments/Wrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faArrowDownAZ, faArrowDownZA, faArrowUp, faCalendarAlt, faCalendarTimes, faFilter } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Project from "../Components/Assets/Fragments/Project"

const Start = () => {

  const maxProject = 2

  const [filter, setFilter] = useState({
    sort:"datedown",
  })
  
  const [filterParams, setFilterParams] = useSearchParams()

  const [sortProjects, setSortProjects] = useState()

  const filterContent = (e) => {
    const allCurrents = e.target.parentElement.parentElement
    const lastCurrent = allCurrents.querySelector(".current")
    lastCurrent.classList.remove("current") 
    e.target.parentElement.classList.add("current")
    setFilter({
      sort:e.target.dataset.sort
    })

  }

  

  useEffect(() => {
    setFilterParams({"sort":filter.sort})
  },[filter])




  useEffect(() => {

    const getFilterParams = String(filterParams.get("sort"))
    console.log(getFilterParams)
    let sortIt
    // console.log(filter.sort)
    switch(getFilterParams){
      case 'datedown':
        sortIt = projectList.sort((a,b) => {
          const aDateTime = new Date(a.date).getTime()
          const bDateTime = new Date(b.date).getTime()
          return bDateTime - aDateTime
        })
        setSortProjects(sortIt)
      break
      case 'dateup':
        sortIt = projectList.sort((a,b) => {
          const aDateTime = new Date(a.date).getTime()
          const bDateTime = new Date(b.date).getTime()
          return aDateTime - bDateTime
        })
        setSortProjects(sortIt)
      break
      case 'atoz':
        sortIt = projectList.sort((a,b) => a.title.localeCompare(b.title))
        setSortProjects(sortIt)
      break
      case 'ztoa':
        sortIt = projectList.sort((a,b) => b.title.localeCompare(a.title))
        setSortProjects(sortIt)
      break
    }
  },[filterParams])


useEffect(() => {
  console.log(sortProjects)
},[sortProjects])

  const projectList = [
    {
      id:0,
      title:"Space-tourim",
      subtitle:"This is just optional",
      type:"Web",
      date:"2024-02-01",
      url:"https://google.de",
      lang:"en",
      teaser:"This is just the place holder. The real text need to be added later!",
      thumb:"./Projects/Space-tourism/screenshot.png",
      tags:["html","Css","Javascript"],
      autor:["Ahmed LEMSSIAH"]
    },
    {
      id:0,
      title:"Countries-api",
      subtitle:"This is just optional",
      type:"Web",
      date:"2023-02-01",
      url:"https://google.de",
      lang:"en",
      teaser:"This is just the place holder. The real text need to be added later!",
      thumb:"./Projects/Countries-api/screenshot.png",
      tags:["React"],
      autor:["Ahmed LEMSSIAH"]
    }
  ]

  return (
    <>
        <Hero />

        <Skills />

        <Section id="projects" classname="projects">
          <header>
            <h2>Projekte</h2>
          </header>
          <Wrapper>
            <div className="projects__filter">
              <FontAwesomeIcon icon={faFilter} size="2x"/>
              <ul className="filter__items" onClick={(e) => {filterContent(e)}}>
                <li className="filter__item atoz">
                  <button data-sort="atoz">
                    <FontAwesomeIcon icon={faArrowDownAZ} size="2x" />
                  </button>
                </li>
                <li className="filter__item ztoa">
                  <button data-sort="ztoa">
                    <FontAwesomeIcon icon={faArrowDownZA} size="2x" />
                  </button>
                </li>
                <li className="filter__item dateup">
                  <button data-sort="dateup">
                    <FontAwesomeIcon icon={faArrowUp} size="1x" />
                    <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
                  </button>
                </li>
                <li className="filter__item datedown current">
                  <button data-sort="datedown">
                    <FontAwesomeIcon icon={faArrowDown} size="1x" />
                    <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
                  </button>
                </li>
              </ul>
            </div>
            <div className="projects__content">
                {
                  sortProjects && (
                    sortProjects.map((project, index) => (
                        index <= maxProject && (
                          <div className="project" key={index}>
                              <Project
                                img = {project.thumb}
                                title={project.title}
                                url={project.url}
                                urltext = {project.urltext}
                                content = {project.teaser}
                                tags={project.tags.map(el => <li>{el}</li>)}
                              />
                          </div> 
                        )
                    ))
                  )
                }
            </div>
          </Wrapper>
        </Section>
    </>
  )
}

export default Start