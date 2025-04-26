import { useState, useRef } from "react";
import MarkdownLoader from "../Fragments/MarkdownLoader";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Class from "./Contact.module.scss";
import {
  faMessage,
  faThumbsDown,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import ToastLayout from "../ToastLayout/ToastLayout";
import { ToastSetup } from "../../../Tools/ToastSetup";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    anrede: "",
    vorname: "",
    nachname: "",
    mail: "",
    tel: "",
    betreff: "",
    nachricht: "",
  });

  const submitButton = useRef();

  const [formStatus, setFormStatus] = useState("");
  const [buttonState, setButtonState] = useState(false);

  const formInputHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setButtonState(true);
          ToastSetup(
            "success",
            "",
            1000,
            false,
            true,
            true,
            false,
            "dark",
            <ToastLayout
              message={`Deine Nachricht wurde versendet. Vielen Dank!`}
            />
          );
          setTimeout(() => {
            window.location.reload();
            setButtonState(false);
          }, 5000);
        },
        (err) => {
          ToastSetup(
            "error",
            "",
            10000,
            false,
            true,
            true,
            true,
            "dark",
            <ToastLayout message={`Fehler beim Senden der Nachricht. ${err}`} />
          );
        }
      );
  };

  return (
    <div className={Class.form}>
      <h3>{t("contact.form.title")}</h3>
      <form onSubmit={formSubmitHandler}>
        <div className="personal">
          <fieldset>
            <legend>{t("contact.form.legends.1")}</legend>

            <div className="anrede-container">
              <label htmlFor="anrede" className="anrede">
                <span>{t("contact.form.inputs.anrede.title")}*:</span>
              </label>
              <select
                name="anrede"
                id="anrede"
                required
                onChange={formInputHandler}
              >
                <option value={null}>---</option>
                <option value="Frau">
                  {t("contact.form.inputs.anrede.options.1")}
                </option>
                <option value="Herr">
                  {t("contact.form.inputs.anrede.options.2")}
                </option>
              </select>
            </div>

            <div className={Class.name_container}>
              <div className="vorname-container">
                <label className="vorname" htmlFor="vorname">
                  <span>{t("contact.form.inputs.vorname.options.1")}*:</span>
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
                  <span>{t("contact.form.inputs.nachname.options.1")}*:</span>
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
            <legend>{t("contact.form.legends.2")}</legend>
            <div className="mail-container">
              <label className="mail" htmlFor="mail">
                <span>{t("contact.form.inputs.email.options.1")}*:</span>
              </label>
              <input
                type="email"
                name="mail"
                id="mail"
                autoComplete="email"
                required
                onChange={formInputHandler}
              />
            </div>
            <div className="tel-container">
              <label className="tel" htmlFor="tel">
                <span>{t("contact.form.inputs.tel.options.1")}*:</span>
              </label>
              <input
                type="text"
                name="tel"
                id="tel"
                inputMode="numeric"
                autoComplete="on"
                required
                onChange={formInputHandler}
              />
            </div>
          </fieldset>
        </div>
        <div className="message">
          <fieldset>
            <legend>{t("contact.form.legends.3")}</legend>
            <div className="betreff-container">
              <label htmlFor="betreff">
                <span>{t("contact.form.inputs.betreff.options.1")}*:</span>
              </label>
              <input
                type="text"
                name="betreff"
                id="betreff"
                required
                autoComplete="off"
                onChange={formInputHandler}
              />
            </div>
            <div className="nachricht-container">
              <label htmlFor="nachricht">
                <span>{t("contact.form.inputs.nachricht.options.1")}*:</span>
              </label>
              <textarea
                name="nachricht"
                id="nachricht"
                rows="5"
                required
                autoComplete="off"
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
                    <MarkdownLoader
                      mdsrc={t("contact.form.inputs.datenschutz.options.text")}
                    />
                  </samp>{" "}
                  <br />
                </span>
              </label>
            </div>
          </fieldset>
        </div>
        <div className="send">
          <button
            className="call__full"
            type="submit"
            ref={submitButton}
            disabled={buttonState}
          >
            <FontAwesomeIcon icon={faMessage} />
            <span>{t("contact.form.inputs.senden.options.1")}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
