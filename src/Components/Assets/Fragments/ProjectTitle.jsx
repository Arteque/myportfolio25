import Class from './ProjectTitle.module.scss';

const ProjectTitle = ({children, classname}) => {
  return (
    <h2 className={`${classname} ${Class.project__title} blur_fadein`}>
        {children}
    </h2>
  )
}

export default ProjectTitle