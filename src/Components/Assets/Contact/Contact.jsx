import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Class from "./Contact.module.scss";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    anrede: "Frau",
    vorname: "",
    nachname: "",
    mail: "",
    tel: "",
    betreff: "",
    nachricht: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/send-email", formData);
      setStatus(response.data.message);
    } catch (error) {
      setStatus("Fehler beim Senden der Nachricht.");
    }
  };

  return (
    <div className={Class.form}>
      <h3>Kontaktformular</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Persönliche Informationen</legend>
          <label>Anrede*:</label>
          <select name="anrede" onChange={handleChange} required>
            <option value="Frau">Frau</option>
            <option value="Herr">Herr</option>
          </select>

          <label>Vorname*:</label>
          <input type="text" name="vorname" required onChange={handleChange} />

          <label>Nachname*:</label>
          <input type="text" name="nachname" required onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>Kontaktdaten</legend>
          <label>E-Mail*:</label>
          <input type="email" name="mail" required onChange={handleChange} />

          <label>Telefon*:</label>
          <input type="text" name="tel" required onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>Nachricht</legend>
          <label>Betreff*:</label>
          <input type="text" name="betreff" required onChange={handleChange} />

          <label>Nachricht*:</label>
          <textarea name="nachricht" rows="5" required onChange={handleChange} />
        </fieldset>

        <div className={Class.discl_container}>
          <input type="checkbox" name="discl" required />
          <label>
            * Die von Ihnen eingegebenen Daten werden <strong>ausschließlich</strong> zum Beantworten Ihrer Nachricht gespeichert und in keinem Fall an Dritte weitergegeben!
          </label>
        </div>

        <button type="submit">
          <FontAwesomeIcon icon={faMessage} />
          <span>Nachricht senden</span>
        </button>

        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
