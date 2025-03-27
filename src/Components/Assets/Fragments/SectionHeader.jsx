
import Class from './SectionHeader.module.scss'

const SectionHeader = ({title1, title2}) => {
  return (
    <header className={`section__header ${Class.section__header}`} >
        <h2 className={`section__title ${Class.section__title}`}>
            {title1 ? <span>{title1}</span> : null} {title2 ?  <span>{title2}</span> : null}
        </h2>
    </header>
  )
}

export default SectionHeader
