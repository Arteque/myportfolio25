import Class from "./Project.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import ProjectTitle from "./ProjectTitle";
import ProjectText from "./ProjectText";

const Project = ({
  img,
  title,
  content,
  tags,
  urls,
  date,
  subtitle,
  language,
  imgUrlLiveWebsite,
}) => {
  return (
    <article className={`border ${Class.projectcontainer}`}>
      <div
        className={`card-media ${Class.projectcard}`}
        style={{ background: `url(${img}) center` }}
      >
        {imgUrlLiveWebsite && imgUrlLiveWebsite}
      </div>
      <header className={Class.project__head}>
        {date && (
          <p className={Class.projectdate}>
            <small>
              <FontAwesomeIcon icon={faCalendarAlt} /> {date}
            </small>
          </p>
        )}
        <ProjectTitle>
          {title}
          {urls && urls}
        </ProjectTitle>
        {subtitle && (
          <p className={Class.project__subtitle}>
            <small>{subtitle}</small>
          </p>
        )}

        <ul className={Class.tags}>
          {tags}
          <li>
            {language && (
                <small>{language}</small>
            )}
          </li>
        </ul>
      </header>
      <ProjectText>
        <div
          style={{
            margin: "0",
            borderBlockEnd: "1px solid var(--clr-txt-400)",
            marginBlockEnd: "1rem",
          }}
        >
          {content}
        </div>
      </ProjectText>
    </article>
  );
};

export default Project;
