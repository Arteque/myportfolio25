import "./Hero.scss"
const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="wrapper">
                <div className="hero__text">
                    <h2>
                    Hallo! <br /> 
                    Schön dich kennen zu lernen!
                    Ich heiße <span className="underline">Ahmed <span className="uppercase">Lemssiah!</span></span>
                    </h2>
                    <p>
                    Ich bin Frontend Web Entwickler 
                    </p>
                    <div className="call">
                        <Link to="/" className="call__full">
                        <FontAwesomeIcon icon={faCaretRight} />
                        <span className="text underline">Kontakt</span>
                        </Link>
                    </div>
                </div>
                <div className="hero__media">
                <img src="./Main/AvatarMainAnimation_2.gif" alt="Ahmed Lemssiah Animation" />
                </div>
            </div>
       </section>
    )
}

export default Hero