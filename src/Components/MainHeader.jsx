import { Link } from "react-router-dom"
import { faSun, faMoon  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faMastodon, faYoutube, faGithub} from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState} from "react"
import MainLogo from "./Assets/Fragments/MainLogo"
import Wrapper from "./Assets/Fragments/Wrapper"

const MainHeader = () => {
    /*
        Color mode
    */

        const isSystemDarkmodeEnabeld = window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches
    
        const [colorMode, setColorMode] = useState()
    

        const darkOrLight = () => {
            let clrMode = ""
            isSystemDarkmodeEnabeld ? clrMode = "dark" : clrMode = "light"
            return clrMode
        }

        const handleColorMode = () => {
            let clrMode = ""
            //check if localstorage has themeMode
            if(localStorage.getItem("themeMode")){
                localStorage.getItem("themeMode") == "dark" ? clrMode = "light" : clrMode = "dark"
            }else{
                // if no themeMode found
                clrMode = darkOrLight() == "dark" ? "light" : "dark"
            }

            // after the check add the value to the localstorage themeMode item
            localStorage.setItem("themeMode", clrMode)

            // after the check change the state. this will trigger the useeffect at the end
            setColorMode(() => {
                return localStorage.getItem("themeMode") == "dark" ? true : false
            })
        }

        // Run the first time calling the app. 
        useEffect(() => {
            if(localStorage.getItem("themeMode")){
                document.body.dataset.mode = localStorage.getItem("themeMode")
                setColorMode(() => {
                    return localStorage.getItem("themeMode") == "dark" ? true : false
                })
            }else{
                document.body.dataset.mode = darkOrLight()
                setColorMode(() => {
                    return darkOrLight() == "dark" ? true : false
                })
            }
        },[])

        // run evrytime the color mode is changed and adding the data-mode to the body tag
        useEffect(() => {
          document.body.dataset.mode = colorMode ? "dark" : "light"
        },[colorMode])

    return (
    <header className="main-header">
        <Wrapper>
            <MainLogo position="header" />
            
            <ul className="main-header__socials">
                <li>
                    <Link to="/" target="_blank" title="Github">
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                </li>
                <li>
                    <Link to="https://mastodon.social/@lemssiah" target="_blank" title="Mastodon">
                        <FontAwesomeIcon icon={faMastodon} />
                    </Link>
                </li>
                <li>
                    <Link to="https://www.instagram.com/artt3k/" target="_blank" title="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </li>
                <li>
                    <Link to="https://www.youtube.com/@artecke99999" target="_blank" title="Youtube">
                        <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                </li>
                
                
            </ul>

            <div className="main-header__color-mode">
                <button onClick={handleColorMode}>
                    <FontAwesomeIcon icon={faSun}  className="sun" />
                    <FontAwesomeIcon icon={faMoon} className="moon" />
                </button>
            </div>
        </Wrapper>
    </header>
  )
}

export default MainHeader