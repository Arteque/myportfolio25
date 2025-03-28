import Class from './ProjectText.module.scss'
const ProjectText = ({children}) => {
  return (
    <div className={`${Class.content}`}>
        {children}
    </div>
  )
}

export default ProjectText
