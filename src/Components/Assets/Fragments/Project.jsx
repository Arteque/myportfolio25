import Class from "./Project.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt, faCircleInfo, faLandmark, faLanguage } from "@fortawesome/free-solid-svg-icons"
import ProjectTitle from "./ProjectTitle"
import ProjectText from "./ProjectText"

const Project = ({img, title, content, tags, urls, date, autor, subtitle, language, imgUrlLiveWebsite}) => {

  

  return (
    <article className={`border ${Class.projectcontainer}`}>
        <div className={`card-media ${Class.projectcard}`} style={{background:`url(${img})`}}>
        {
          imgUrlLiveWebsite && (
            imgUrlLiveWebsite
          )
        }
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
            <ProjectTitle>
              {title}
              {
                urls && (
                  urls
                )
              }
            </ProjectTitle>
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
        <ProjectText>
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
        </ProjectText>
    </article>
  )
}

export default Project
