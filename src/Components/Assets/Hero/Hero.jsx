import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import Section from "../Fragments/Section"
import Wrapper from "../Fragments/Wrapper"

import Class from './Hero.module.scss'

const Hero = () => {

    const clickHandler = (e) => {
        e.preventDefault()
        const target = e.target.dataset.target
        console.log(target)
        document.querySelector(target).scrollIntoView({ behavior: "smooth" })
    }

    return (
    <Section classname="hero" id="hero">
        <Wrapper>
            <div className="hero__text">
                <h2>
                    <span className="block small">Ich heiße</span> <span className="name">Ahmed </span> <span className="uppercase name">Lemssiah</span>
                </h2>
                <p>
                    ich bin <span className="underline">Frontend Web Entwickler</span>
                    
                </p>
                <div className="call">
                    <Link to="/" className={`call__full ${Class.call__full}`} onClick={clickHandler} data-target="#contact">
                        <FontAwesomeIcon icon={faCaretRight} />
                        <span className="text underline">Kontakt</span>
                    </Link>
                    <Link to="/" className={`call__full ${Class.call__full}`} onClick={clickHandler} data-target="#projects">
                        <FontAwesomeIcon icon={faCaretRight} />
                        <span className="underline">Portfolio</span>
                    </Link>
                </div>
            </div>
            <div className="hero__media">
                <img src="./Main/AvatarMainAnimation_3.gif" alt="Ahmed Lemssiah Animation" />
            </div>
        </Wrapper>
        <div className="fixed-media">
            <img className="sun"src="/Canvas/Hero/Sun.svg" alt="Sonne Zeichentrick" />
            <img className="moon" src="/Canvas/Hero/Moon.svg" alt="Mond Zeichentrick" />
        </div>
    </Section>)
}

export default Hero
