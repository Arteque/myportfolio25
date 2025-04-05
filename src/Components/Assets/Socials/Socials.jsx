import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faMastodon,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Class from "./Socials.module.scss";


const Socials = () => {


    const socialItems = [
        {
            id:1,
            title:"Github",
            url: "https://github.com/Arteque",
            aria:"Besuche mein Github-Profil",
            font: faGithub,
            color: "#080808"
        },
        {
            id:2,
            title:"Mastodon",
            url: "https://mastodon.social/@lemssiah",
            aria:"Folge mir auf Mastodon",
            font: faMastodon,
            color: "#6766FD"
        },
        {
            id:3,
            title:"Instagram",
            url: "https://www.instagram.com/artt3k/",
            aria:"Folge mir auf Instagram",
            font: faInstagram,
            color: "linear-gradient(to bottom, #ffdf9e, #ffc273, #e56969, #c1558b, #8a49a1)"
        },
        {
            id:4,
            title:"Youtube",
            url: "https://www.youtube.com/@artecke99999",
            aria:"Abonniere meinen Youtube-Kanal",
            font: faYoutube,
            color: "#FF1138"
        },
    ]

  return (
    <ul className={Class.main_header__socials}>
        {
            socialItems && socialItems.length > 0 &&(
                socialItems.map(item => (
                    <li key={item.id}>
                        <Link
                            to={item.url}
                            target="_blank"
                            title={item.aria}
                            aria-label={item.aria}
                            role="button"
                            rel="noopener noreferrer nofollow"
                        >
                        <FontAwesomeIcon icon={item.font} aria-hidden="true" />
                        </Link>
                    </li>
                ))
            )
        }
    </ul>
  );
};

export default Socials;
