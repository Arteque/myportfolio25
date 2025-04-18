import ProjectText from "../Fragments/ProjectText";
import Class from "./About.module.scss";
import Age from "../../../Tools/Age";

const About = () => {
  return (
    <div className={`about__container ${Class.about_container}`}>
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
        <h3>&Uuml;ber mich: </h3>
        <p>
          Hey! Schön, dass du es bis hierher geschafft hast! Ich danke dir für
          dein Interesse!😊
        </p>

        <p>
          <strong>Noch einmal zur Form:</strong> Ich heiße{" "}
          <strong>
            Ahmed <span className="uppercase">Lemssiah</span>
          </strong>
          , bin <strong>{Age()}</strong> Jahre alt, komme aus{" "}
          <strong>Marokko</strong>, arbeite seit 2019 als{" "}
          <strong>Frontend Webentickler</strong> und lebe derzeit in{" "}
          <strong>Deutschland/Thüringen</strong>. Glücklicher Papa von zwei
          Kindern &#128111; und Ehemann einer wundervollen Frau. 🤗
        </p>
        <p>
          Ich habe französische Literatur und Kommunikation studiert und sogar
          eine Zeit lang als Französischlehrer gearbeitet &#127979;. Doch meine
          wahre Leidenschaft liegt im{" "}
          <strong>Gestalten und Programmieren</strong> – und genau das habe ich
          zu meinem Beruf gemacht.
        </p>
      </ProjectText>
    </div>
  );
};

export default About;
