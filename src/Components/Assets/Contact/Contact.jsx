import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Class from "./Contact.module.scss"
import {faMessage } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  return (
    <div className={Class.form}>
      <h3>Kontaktformular</h3>
      <form>
        <div className="personal">
          <fieldset>
            <legend>Persönliche Informationen</legend>
            
            <div className="anrede-container">
              <label htmlFor="anrede" className="anrede">
                <span>Anrede*:</span>
              </label>
              <select name="anrede" id="anrede" required>
                <option value="Frau">Frau</option>
                <option value="Herr">Herr</option>
              </select>
            </div>

            <div className={Class.name_container}>
              <div className="vorname-container">
                <label className="vorname" htmlFor="vorname" >
                  <span>Vorname*:</span>
                </label>
                <input type="text" name="vorname" id="vorname" autoComplete="first-name" required/>
              </div>
              
              <div className="nachname-container">
                <label className="nachname" htmlFor="nachname">
                  <span>Nachname*:</span>
                </label>
                <input type="text" name="nachname" id="nachname" autoComplete="last-name" required/>
              </div>

            </div>

          </fieldset>
        </div>
        <div className="contact">
          <fieldset>
            <legend>Kontaktdaten</legend>
            <div className="mail-container">
              <label className="mail" htmlFor="mail">
                <span>E-Mail*:</span>
              </label>
              <input type="email" name="mail" id="mail" autoComplete="mail" required/>
            </div>
            <div className="tel-container">
              <label className="tel" htmlFor="tel">
                <span>Tel*:</span>
              </label>
              <input type="text" name="tel" id="tel" pattern="[0-9\s]{13,19}" inputMode="numeric" autoComplete="tel" required/>
            </div>
          </fieldset>
        </div>
        <div className="message">
          <fieldset>
            <legend>Nachricht</legend>
            <div className="betreff-container">
              <label htmlFor="betreff">
                <span>Betreff*:</span>
              </label>
              <input type="text" name="betreff" id="betreff" required/>
            </div>
            <div className="nachricht-container">
              <label htmlFor="nachricht">
                <span>Nachricht*:</span>
              </label>
              <textarea name="nachricht" id="nachricht" rows="5" required></textarea>
            </div>
          </fieldset>
        </div>
        <div className="send">
           <button className="call__full" type="submit">
              <FontAwesomeIcon icon={faMessage} />
              <span>Nachricht senden</span>
            </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
