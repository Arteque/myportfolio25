

const SectionHeader = ({title1, title2}) => {
  return (
    <header className="section__header">
        <h2>
            {title1 ? <span className="txt-txt-100">{title1}</span> : null} {title2 ?  <span className="underline txt-call-100">{title2}</span> : null}
        </h2>
    </header>
  )
}

export default SectionHeader
