import { Link } from "react-router-dom"
import { faBars, faTimes, faSun, faMoon  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faMastodon, faYoutube, faRedditAlien } from "@fortawesome/free-brands-svg-icons"
import { useState} from "react"

const MainHeader = () => {

    const [burger, setBurger] = useState(false)

    const handleBurger = () => {
        setBurger(prev => !prev)
    }


  return (
    <header className="main-header">
        <div className="wrapper">
            <div className="main-header__top-nav">
                <div className="main-header__color-mode">
                    <button>
                        <FontAwesomeIcon icon={faSun}  className="sun" />
                        <FontAwesomeIcon icon={faMoon} className="moon" />
                    </button>
                </div>
                <ul className="main-header__socials">
                    <li>
                        <Link to="/" target="_blank" title="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/" target="_blank" title="Mastodon">
                            <FontAwesomeIcon icon={faMastodon} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/" target="_blank" title="Redit">
                                 <FontAwesomeIcon icon={faRedditAlien} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/" target="_blank" title="Youtube">
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                    </li>
                    
                </ul>
            </div>
            <div className="main-header__bottom-nav">
                <div className="main-header__logo">
                    <img src="./logo.svg" alt="Ahmed Lemssiah | Webdesigner" />
                    <h1 className="website-title">Ahmed Lemssiah</h1>
                </div>
                <nav className="main-header__main-nav">
                    <button className={`main-header__main-nav-burger ${burger ? 'open' : 'close'}`} onClick={handleBurger}>
                        <FontAwesomeIcon icon={faBars} className="main-header__main-nav-burger--menuisclose" size="2x"/>
                        <FontAwesomeIcon icon={faTimes} className="main-header__main-nav-burger--menuisopen" size="2x"/>
                    </button>
                    <ul className={`main-header__nav-items  ${burger ? 'open' : 'close'}`}>
                        <li className="main-header__nav-item">
                            <Link to="/">Start</Link>
                        </li>
                        <li className="main-header__nav-item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="main-header__nav-item">
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="main-header__nav-item">
                            <Link to="/kontakt">Kontakt</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default MainHeader