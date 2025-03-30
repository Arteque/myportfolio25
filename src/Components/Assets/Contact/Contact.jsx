import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Class from "./Contact.module.scss";
import { faMessage, faThumbsDown, faWarning } from "@fortawesome/free-solid-svg-icons";
import ToastLayout from "../ToastLayout/ToastLayout";
import { ToastSetup } from "../../../Tools/ToastSetup";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    anrede: "",
    vorname: "",
    nachname: "",
    mail: "",
    tel: "",
    betreff: "",
    nachricht: "",
  });


  const [formStatus, setFormStatus] = useState("")

  const formInputHandler = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.name]: e.target.value })
    
  }


  const formSubmitHandler = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post("/api/send-email", formData);
      setStatus(response.data.message);
    }
    catch (err){
      setFormStatus(ToastSetup("error", "", 10000, false, true, true, true, 'dark', <ToastLayout message={`Fehler beim Senden der Nachricht. ${err}`} />))
    }
  }

  return (
    <div className={Class.form}>
      <h3>Kontaktformular</h3>
      <form onSubmit={formSubmitHandler}>
        <div className="personal">
          <fieldset>
            <legend>Persönliche Informationen</legend>

            <div className="anrede-container">
              <label htmlFor="anrede" className="anrede">
                <span>Anrede*:</span>
              </label>
              <select
                name="anrede"
                id="anrede"
                required
                onChange={formInputHandler}
              >
                <option value={null}>---</option>
                <option value="Frau">Frau</option>
                <option value="Herr">Herr</option>
              </select>
            </div>

            <div className={Class.name_container}>
              <div className="vorname-container">
                <label className="vorname" htmlFor="vorname">
                  <span>Vorname*:</span>
                </label>
                <input
                  type="text"
                  name="vorname"
                  id="vorname"
                  autoComplete="first-name"
                  required
                  onChange={formInputHandler}
                />
              </div>

              <div className="nachname-container">
                <label className="nachname" htmlFor="nachname">
                  <span>Nachname*:</span>
                </label>
                <input
                  type="text"
                  name="nachname"
                  id="nachname"
                  autoComplete="last-name"
                  required
                  onChange={formInputHandler}
                />
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
              <input
                type="email"
                name="mail"
                id="mail"
                autoComplete="mail"
                required
                onChange={formInputHandler}
              />
            </div>
            <div className="tel-container">
              <label className="tel" htmlFor="tel">
                <span>Tel*:</span>
              </label>
              <input
                type="text"
                name="tel"
                id="tel"
                pattern="[0-9\s]{13,19}"
                inputMode="numeric"
                autoComplete="tel"
                required
                onChange={formInputHandler}
              />
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
              <input
                type="text"
                name="betreff"
                id="betreff"
                required
                onChange={formInputHandler}
              />
            </div>
            <div className="nachricht-container">
              <label htmlFor="nachricht">
                <span>Nachricht*:</span>
              </label>
              <textarea
                name="nachricht"
                id="nachricht"
                rows="5"
                required
                onChange={formInputHandler}
              ></textarea>
            </div>
            <div className={Class.discl_container}>
              <input
                type="checkbox"
                name="discl"
                id="discl"
                required
                onChange={formInputHandler}
              />
              <label htmlFor="discl">
                <span>
                  <samp>
                    * Die von Ihnen eingegebenen Daten werden{" "}
                    <strong>ausschließlich</strong> zum Beantworten Ihrer
                    Nachricht gespeichert und in keinem Fall an Dritte
                    weitergegeben!
                  </samp>{" "}
                  <br />
                </span>
              </label>
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
  );
};

export default Contact;
