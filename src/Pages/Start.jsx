import { Link } from "react-router-dom"

const Start = () => {
  return (
    <section className="hero" id="hero">
      <div className="wrapper">
          <div className="hero__text">
              <h2>
                <span className="top">Ich heiße,</span><br />
                <strong>Ahmed <span className="uppercase txt-call-100">Lemssiah</span></strong> <br />
                <span className="bottom">Webdesigner aus Thüringen</span>
              </h2>
              <ul className="call">
                <li>
                  <Link to="/" className="call__full">Kontak</Link>
                </li>
                <li>
                  <Link to="/" className="call__border">Portfolio</Link>
                </li>
              </ul>
          </div>
          <div className="hero__media">
            <img src="./Main/AvatarMainAnimation_2.gif" alt="Ahmed Lemssiah Animation" />
          </div>
          
      </div>
    </section>
  )
}

export default Start