import { Link } from "react-router-dom"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState} from "react"

const MainHeader = () => {

    const [burger, setBurger] = useState(false)

    const handleBurger = () => {
        setBurger(prev => !prev)
        console.log(burger)
    }


  return (
    <header className="main-header">
        <div className="wrapper">
            <div className="main-header__top-nav">
                <div className="main-header__color-mode">
                    <button>

                    </button>
                </div>
                <ul className="main-header__socials">

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