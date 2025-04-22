import ProjectText from "../Fragments/ProjectText";
import Class from "./About.module.scss";
import Age from "../../../Tools/Age";

const About = () => {
  return (
    <div
      className={`about__container grid--2cols border ${Class.about_container}`}
      style={{ gap: "2rem" }}
    >
      <figure className={`blur_fadein about_figure ${Class.about_figure}`}>
        <img
          loading="lazzy"
          src="/Profil/amd.png"
          alt="Ahmed Lemssiah Profilbild"
          area-label="Profilbild von Ahmed Lemssiah"
        />
        <figcaption>Ahmed Lemssiah</figcaption>
      </figure>
      <ProjectText>
        <p>
          Hallo, <br />
          Ich bin <b>Webentwickler</b> mit Fokus auf{" "}
          <b>Frontend-Technologien</b> und über <b>4 Jahren Berufserfahrung</b>{" "}
          in der Umsetzung moderner, performanter und benutzerfreundlicher
          Websites.Ich bringe nicht nur technisches Know-how, sondern auch einen
          klaren Blick für das Wesentliche und eine strukturierte, zuverlässige
          Arbeitsweise mit.
        </p>
        <p>
          Ich bin es gewohnt, eigenverantwortlich zu arbeiten, Deadlines
          einzuhalten und Projekte zielgerichtet zum Erfolg zu führen – ob im
          Team oder allein.
        </p>
        <p>
          Ich arbeite an allen Phasen eines Webprojekts – vom ersten Konzept
          über die Entwicklung bis hin zur Integration und Wartung. Dabei ist es
          mir wichtig, stets den Überblick zu behalten und an den richtigen
          Stellen flexibel zu bleiben.
        </p>

        <h2>Was mich auszeichnet</h2>
        <ul>
          <li>
            <strong>Zielstrebig:</strong> Ich arbeite lösungsorientiert und mit
            Fokus auf Ergebnisse.
          </li>
          <li>
            <strong>Akkurat:</strong> Sauberer, wartbarer Code und ein Auge fürs
            Detail sind für mich selbstverständlich.
          </li>
          <li>
            <strong>Kommunikativ:</strong> Ich lege Wert auf eine klare
            Abstimmung mit Kunden und Projektpartnern.
          </li>
        </ul>

        <h2>Sprachen</h2>
        <p>
          Ich spreche fließend Deutsch, Französisch, Englisch und Arabisch,
          sowohl in Wort als auch in Schrift. Das hilft mir, Projekte in
          verschiedenen Sprachräumen und Kulturen zu verstehen und umzusetzen.
        </p>

        <h2>Was mir wichtig ist</h2>
        <p>
          Ich arbeite fokussiert, sorgfältig und in enger Abstimmung mit meinen
          Kunden. Besonders wichtig ist mir eine gute Kommunikation, um
          sicherzustellen, dass das Endprodukt den Erwartungen entspricht und
          einen echten Mehrwert bietet.
        </p>
      </ProjectText>
    </div>
  );
};

export default About;
