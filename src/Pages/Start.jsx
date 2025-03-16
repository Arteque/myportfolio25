import Skills from "../Components/Assets/Skills/Skills"
import Hero from "../Components/Assets/Hero/Hero"
import Section from "../Components/Assets/Fragments/Section"
import Wrapper from "../Components/Assets/Fragments/Wrapper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDownAZ, faArrowDownZA, faCalendarTimes, faFilter } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

const Start = () => {


  const [filter, setFilter] = useState({
    sort:"date",
  })
  
  const [filterParams, setFilterParams] = useSearchParams()

  const filterContent = (e) => {
    const allCurrents = e.target.parentElement.parentElement
    console.log(allCurrents)
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

  const projectList = [
    {
      id:0,
      title:"Website",
      subtitle:"This is just optional",
      type:"Web",
      date:"2024-02-01",
      url:"https://google.de",
      lang:"en",
      teaser:"This is just the place holder. The real text need to be added later!",
      thumb:"./projects/[projectname]/thumb/[projectname]__thumb.jpg",
      tags:["html","Css","Javascript"],
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
                <li className="filter__item atoz current">
                  <button data-sort="atoz">
                    <FontAwesomeIcon icon={faArrowDownAZ} size="2x" />
                  </button>
                </li>
                <li className="filter__item ztoa">
                  <button data-sort="ztoa">
                    <FontAwesomeIcon icon={faArrowDownZA} size="2x" />
                  </button>
                </li>
                <li className="filter__item date">
                  <button data-sort="date">
                    <FontAwesomeIcon icon={faCalendarTimes} size="2x" />
                  </button>
                </li>
              </ul>
            </div>
            <div className="projects__content">
              
            </div>
          </Wrapper>
        </Section>
    </>
  )
}

export default Start