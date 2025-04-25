import { Translation, useTranslation } from "react-i18next";
import MarkdownLoader from "../Fragments/MarkdownLoader";
import ProjectText from "../Fragments/ProjectText";
import ProjectTitle from "../Fragments/ProjectTitle";
import Section from "../Fragments/Section";
import SectionHeader from "../Fragments/SectionHeader";
import Wrapper from "../Fragments/Wrapper";
import Class from "./Services.module.scss";

const Services = () => {
  const { t, i18n } = useTranslation();

  return (
    <Section classname="section__services" id="section__services">
      <Wrapper>
        <SectionHeader title1={t("services.title")} />
        {/* Card Start */}
        <div className={Class.services__cards}>
          <div className={`border ${Class.service__card}`}>
            <div className={Class.card__header}>
              <div className={Class.room_img}>
                <img
                  src="/Erfinder/cartoonFinderRoom.jpg"
                  alt="Labor Cartoon style"
                  loading="lazzy"
                />
              </div>
              <div className={Class.header__main_image}>
                <img
                  src="/Erfinder/ErfinderAvatar.svg"
                  alt="Erfinder à la Einstein"
                  loading="lazzy"
                />
              </div>
              <div className={Class.header__assets_images}>
                <img
                  src="/Erfinder/LaborFlasche1.svg"
                  alt="Labor Flasche"
                  loading="lazzy"
                />
                <img
                  src="/Erfinder/LaborMischFlasche1.svg"
                  alt="Labor Mischflasche"
                  loading="lazzy"
                />
                <img
                  src="/Erfinder/Element 3.svg"
                  alt="Labor Mischflasche"
                  loading="lazzy"
                />
                <img
                  src="/Erfinder/Mikroskop.svg"
                  alt="Mikroskop"
                  loading="lazzy"
                />
              </div>
            </div>
            <div className={Class.card__body}>
              <ProjectTitle>
                <span className="txt-txt-100"> {t("services.1.title.1")}</span>-
                <span className="underline txt-txt-200 bg-call-400 uppercase">
                  {t("services.1.title.2")}
                </span>
              </ProjectTitle>
              <ProjectText>
                <MarkdownLoader mdsrc={t("services.1.text")} />
              </ProjectText>
            </div>
          </div>
        </div>
        {/* Card end */}

        {/* Card Start */}
        <div className={Class.services__cards}>
          <div className={`border ${Class.service__card}`}>
            <div className={Class.card__header}>
              <div className={Class.room_img}>
                <img
                  src="/Designer/cartoonDesignerRoom.jpg"
                  alt="Hintergrund Designzimmer"
                  loading="lazzy"
                />
              </div>
              <div className={Class.header__main_image}>
                <img
                  src="/Designer/DesignerAvatar.svg"
                  alt="Avtar eines Designers. Er sieht wie Dali aus"
                  loading="lazzy"
                />
              </div>
              <div className={Class.header__assets_images}>
                <img
                  src="/Designer/piplette.svg"
                  alt="Piplette"
                  loading="lazzy"
                />
                <img
                  src="/Designer/brush.svg"
                  alt="Malpinsel"
                  loading="lazzy"
                />
                <img
                  src="/Designer/colorOrange.svg"
                  alt="Orangefarbe"
                  loading="lazzy"
                />
                <img
                  src="/Designer/colorpalette.svg"
                  alt="Farbpallette"
                  loading="lazzy"
                />
              </div>
            </div>
            <div className={Class.card__body}>
              <ProjectTitle>
                <span className="txt-txt-100">Pixel</span>-
                <span className="underline txt-txt-200 bg-call-400 uppercase">
                  Artiste
                </span>
              </ProjectTitle>
              <ProjectText>
                <MarkdownLoader mdsrc={t("services.2.text")} />
              </ProjectText>
            </div>
          </div>
        </div>
        {/* Card end */}
        {/* Card Start */}
        <div className={Class.services__cards}>
          <div className={`border ${Class.service__card}`}>
            <div className={Class.card__header}>
              <div className={Class.room_img}>
                <img
                  src="/Entwickler/cartoonDevRoom.jpg"
                  alt="Zimmer eines Programmiers"
                  loading="lazzy"
                />
              </div>
              <div className={Class.header__main_image}>
                <img
                  src="/Entwickler/EntwicklerAvatar.svg"
                  alt="Avatar Programierer"
                  loading="lazzy"
                />
              </div>
              <div className={Class.header__assets_images}>
                <img
                  src="/Entwickler/keyboard.png"
                  alt="Computer Tastatur"
                  loading="lazzy"
                />
                <img
                  src="/Entwickler/mouse.svg"
                  alt="Rechner Mouse"
                  loading="lazzy"
                />
                <img
                  src="/Entwickler/screen.png"
                  alt="Bildschirm"
                  loading="lazzy"
                />
                <img
                  src="/Entwickler/calendar.svg"
                  alt="Kalendar"
                  loading="lazzy"
                />
              </div>
            </div>
            <div className={Class.card__body}>
              <ProjectTitle>
                <span className="txt-txt-100">DOM</span>-
                <span className="underline txt-txt-200 bg-call-400 uppercase">
                  Dompteur
                </span>
              </ProjectTitle>
              <ProjectText>
                <MarkdownLoader mdsrc={t("services.3.text")} />
              </ProjectText>
            </div>
          </div>
        </div>
        {/* Card end */}
      </Wrapper>
    </Section>
  );
};

export default Services;
