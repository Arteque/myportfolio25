import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import Section from "../Fragments/Section"
import Wrapper from "../Fragments/Wrapper"
const Hero = () => {
    return (
    <Section classname="hero" id="hero">
        <Wrapper>
            <div className="hero__text">
                <h2>
                    Hallo! <br />
                    Ich heiße <br /> Ahmed <span className="uppercase">Lemssiah!</span>
                </h2>
                <p>
                    Ich bin <span className="underline">Frontend Web Entwickler</span> 
                </p>
                <div className="call">
                    <Link to="/" className="call__full">
                        <FontAwesomeIcon icon={faCaretRight} />
                        <span className="text underline">Kontakt</span>
                    </Link>
                    <Link to="/" className="call__full">
                        <FontAwesomeIcon icon={faCaretRight} />
                        <span className="underline">Portfolio</span>
                    </Link>
                </div>
            </div>
            <div className="hero__media">
                <img src="./Main/AvatarMainAnimation_2.gif" alt="Ahmed Lemssiah Animation" />
            </div>
        </Wrapper>
    </Section>)
}

export default Hero
