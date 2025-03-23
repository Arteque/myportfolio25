import { Link } from "react-router-dom"
import Class from "./Project.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt, faCircleInfo, faLandmark, faLanguage } from "@fortawesome/free-solid-svg-icons"

const Project = ({img, title, content, tags, urls, date, autor, subtitle, language}) => {

  

  return (
    <article className={`skill scoll__fadein ${Class.projectcontainer}`}>
        <div className={Class.projectcard} style={{background:`url(${img})`}}>
        </div>
        <header className={Class.project__head}>
          {
            date && (
              <p className={Class.projectdate}>
                <small>
                  <FontAwesomeIcon icon={faCalendarAlt}/> {date}
                </small>
              </p>
            )
          }
          
          <h4 className={Class.project__title}>
            {title}
            {
              urls && (
                urls
              )
            }
          </h4>
          {
            subtitle && (
              <p className={Class.project__subtitle}>
                <small>{subtitle}</small>
              </p>
            )
          }
          
          <ul className={Class.tags}>
              {tags}
           </ul>
        </header>
        <div className={`${Class.content}`}>
          
           <p>
             <FontAwesomeIcon icon={faCircleInfo} /> {content}
           </p>
           {
            language && (
              <p className={Class.projectdate}>
                {language}   
              </p>
            )
          }
           
        </div>
    </article>
  )
}

export default Project
