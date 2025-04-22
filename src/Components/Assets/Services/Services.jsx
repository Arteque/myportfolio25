import ProjectText from "../Fragments/ProjectText";
import ProjectTitle from "../Fragments/ProjectTitle";
import Section from "../Fragments/Section";
import SectionHeader from "../Fragments/SectionHeader";
import Wrapper from "../Fragments/Wrapper";
import Class from "./Services.module.scss";
import Age from "../../../Tools/Age";

const Services = () => {
  return (
    <Section classname="section__services" id="section__services">
      <Wrapper>
        <SectionHeader title1="Meine " title2="Leistungen" />
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
                <span className="txt-txt-100"> Ideen</span>-
                <span className="underline txt-txt-200 bg-call-400 uppercase">
                  Erfinder
                </span>
              </ProjectTitle>
              <ProjectText>
                <p>
                  Ich suche den perfekten Mix - wie ein Nerd im <b>Design</b>
                  -Labor.
                  <br /> <br />
                  In der Ideenphase analysiere ich gemeinsam mit dem Kunden, die{" "}
                  <b>Anforderungen</b>, <b>Zielgruppen</b> und <b>Use Cases</b>.
                  Daraus entstehen <b>UI-Konzepte</b>, Wireframes und
                  Nutzerflows – mit Fokus auf intuitive Bedienung und visuelle
                  Klarheit.
                </p>
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
                <p>
                  <q>Ich träume mein Bild, und dann male ich meinen Traum.</q> —{" "}
                  <b>Vincent van Gogh</b> <br /> <br />
                  So ist es auch mit <b>Webdesign</b>: Wünsche und Träume werden
                  durchdacht und in ein <b>Designkonzept</b> verwandelt. Ich
                  gestalte die Wireframes in enger Abstimmung mit meinen
                  Kollegen und Kunden, bis das Endlayout steht. Das Endprodukt
                  ist ein durchdachtes, konsistentes{" "}
                  <b>Design-System</b>.
                </p>
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
                <p>
                  Als <b>Webdompteur</b> zähme ich <b>Browser</b> mit präzisem{" "}
                  <b>Code</b>, <b>Geduld</b> und <b>Disziplin</b>.<br /> <br />
                  In der <b>Codierungsphase</b> setze ich <b>Designs</b> präzise
                  um – sowohl mit modernen <b>Frameworks</b> wie <b>React</b>{" "}
                  als auch mit <b>CMS</b>-Lösungen wie <b>TYPO3</b> und{" "}
                  <b>WordPress</b>.<br /> <br />
                  Ich achte auf <b>modularen</b>, <b>wartbaren Code</b>, der auf{" "}
                  <b>Performance</b>, <b>Accessibility</b> und{" "}
                  <b>Responsiveness</b> optimiert ist.
                  <br />
                  <br />
                  Zusätzlich übernehme ich die <b>Wartung</b> und regelmäßige{" "}
                  <b>Updates</b> von <b>Websites</b>.
                </p>
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
