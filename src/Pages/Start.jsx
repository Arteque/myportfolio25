import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import Skills from "../Components/Assets/Skills/Skills"
import Hero from "../Components/Assets/Hero/Hero"
const Start = () => {
  return (
    <>
      <Hero />
      <section id="skills" className="skills">
        <div className="wrapper">
          <Skills />
        </div>
      </section>
    </>
  )
}

export default Start