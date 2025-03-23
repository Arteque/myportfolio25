import { Link } from "react-router-dom"
import Class from "./Project.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt, faLink } from "@fortawesome/free-solid-svg-icons"

const Project = ({img, title, content, tags, url, urltext, date, autor}) => {
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
              {title} <FontAwesomeIcon icon={faLink} className={Class.icon}/>
          </h4>
          <ul className={Class.tags}>
              {tags}
           </ul>
        </header>
        <div className={`${Class.content}`}>
          <Link to={url} title={urltext} className={Class.projectLink} target="_blank"><span>{urltext}</span></Link>
           <p>
              {content}
           </p>
           {
            autor && (
              <ul className={Class.tags} style={{marginBlockStart:'0.5rem', opacity:'0.5'}}>
                  {autor}
              </ul>
            )
           }
        </div>
    </article>
  )
}

export default Project
