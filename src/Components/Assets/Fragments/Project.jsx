import { Link } from "react-router-dom"
import Class from "./Project.module.scss"
const Project = ({img, title, content, tags, url, urltext}) => {
  return (
    <article className="skill">
        <div className={`skill scroll__fadein ${Class.projectcard}`} style={{background:`url(${img})`}}>
        </div>
        <header className={Class.project__head}>
          <h3 className="project__title">
              {title}
          </h3>
        </header>
        <div className={`${Class.content}`}>
          <Link to={url} title={urltext}>{urltext}</Link>
           <p>
              {content}
           </p>
           <ul>
              {tags}
           </ul>
        </div>
    </article>
  )
}

export default Project
