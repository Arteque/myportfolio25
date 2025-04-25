import { useTranslation } from "react-i18next";
import MarkdownLoader from "../Fragments/MarkdownLoader";
import ProjectText from "../Fragments/ProjectText";
import Class from "./About.module.scss";
import Age from "../../../Tools/Age";

const About = () => {

  const {t, i18n} = useTranslation()

  const mdSrc = String(t("about.text"))

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
        <MarkdownLoader mdsrc={mdSrc} />
      </ProjectText>
    </div>
  );
};

export default About;
