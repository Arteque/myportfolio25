import ProjectText from "../Fragments/ProjectText"
import ProjectTitle from "../Fragments/ProjectTitle"
import Section from "../Fragments/Section"
import SectionHeader from "../Fragments/SectionHeader"
import Wrapper from "../Fragments/Wrapper"
import Class from './Services.module.scss'

const Services = () => {
  return (
    <Section classname="section__services" id="section__services">
        <Wrapper>
            <SectionHeader title1="Erfinde, entwerfe, kodiere" title2="&amp; REPEAT" />
            {/* Card Start */}
            <div className={Class.services__cards}>
                <div className={`border ${Class.service__card}`}>
                    <div className={Class.card__header} >
                        <div className={Class.room_img}>
                            <img src="/Erfinder/cartoonFinderRoom.jpeg" alt="Labor Cartoon style" />
                        </div>
                        <div className={Class.header__main_image}>
                            <img src="/Erfinder/ErfinderAvatar.svg" alt="Erfinder à la Einstein" />
                        </div>
                        <div className={Class.header__assets_images}>
                            <img src="/Erfinder/LaborFlasche1.svg" alt="Labor Flasche" />
                            <img src="/Erfinder/LaborMischFlasche1.svg" alt="Labor Mischflasche" />
                            <img src="/Erfinder/Element 3.svg" alt="Labor Mischflasche" />
                            <img src="/Erfinder/Mikroskop.svg" alt="Mikroskop" />
                        </div> 
                    </div>
                    <div className={Class.card__body}>
                        <ProjectTitle>
                            <span> Ideen</span>-<span className="underline txt-txt-100 uppercase">Erfinder</span>
                        </ProjectTitle>
                        <ProjectText>
                            <p>
                                Ich bin immer auf der Suche nach den <strong>richtigen Ideen</strong>, den <strong>passenden Lösungen</strong> und den perfekten Mischungen... <br /> 
                                Wie ein Wahnsinniger im Labor des <strong className="txt-txt-200">Webdesigns</strong>! <br />
                                <strong className="txt-txt-200">Pixel</strong>? Mein Elixier! <strong className="txt-txt-200">Code</strong>? Mein geheimnisvolles Serum! <br />
                                Jede <strong>Webseite</strong>, die ich erschaffe, ist eine Fusion aus Logik und Chaos – exakt berechnet, aber voller kreativer Explosionen! <br />
                                MUAHAHA! 😈💻⚡ <br></br>
                                ... Ja! Ich bin <small><small><small>42Jahre alte</small></small></small>
                            </p>
                        </ProjectText>
                    </div>
                </div>
            </div>
            {/* Card end */}

            {/* Card Start */}
            <div className={Class.services__cards}>
                <div className={`border ${Class.service__card}`}>
                    <div className={Class.card__header} >
                        <div className={Class.room_img}>
                            <img src="/Designer/cartoonDesignerRoom.jpeg" alt="Hintergrund Designzimmer" />
                        </div>
                        <div className={Class.header__main_image}>
                            <img src="/Designer/DesignerAvatar.svg" alt="Erfinder à la Einstein" />
                        </div>
                        <div className={Class.header__assets_images}>
                            <img src="/Designer/piplette.svg" alt="Piplette" />
                            <img src="/Designer/brush.svg" alt="Malpinsel" />
                            <img src="/Designer/colorOrange.svg" alt="Orangefarbe" />
                            <img src="/Designer/colorpalette.svg" alt="Farbpallette" />
                        </div>
                    </div>
                    <div className={Class.card__body}>
                        <ProjectTitle>
                            <span>Pixel</span>-<span className="underline txt-txt-100 uppercase">Artiste</span>
                        </ProjectTitle>
                        <ProjectText>
                            
                            <p>
                                <q> 
                                    Ich träume von meinen Gemälden und dann male ich meine Träume. 
                                </q> – Dalí🎨✨ <br />
                            Genauso ist es mit <strong>Webdesign</strong>! Erst träumen wir, dann <strong>designen wir</strong> – und manchmal schmilzt <strong>das Layout</strong> dahin wie eine Dalí-Uhr. 😅 Doch mit klarem Konzept, guter Recherche und einem Hauch Magie 🎭 wird aus jeder Website ein <strong>surreales Meisterwerk</strong>. 🚀
                            </p>
                        </ProjectText>
                    </div>
                </div>
            </div>
            {/* Card end */}
            {/* Card Start */}
            <div className={Class.services__cards}>
                <div className={`border ${Class.service__card}`}>
                    <div className={Class.card__header} >
                        <div className={Class.room_img}>
                            <img src="/Entwickler/cartoonDevRoom.jpeg" alt="Hintergrund Designzimmer" />
                        </div>
                        <div className={Class.header__main_image}>
                            <img src="/Entwickler/EntwicklerAvatar.svg" alt="Erfinder à la Einstein" />
                        </div>
                        <div className={Class.header__assets_images}>
                            <img src="/Entwickler/keyboard.svg" alt="Piplette" />
                            <img src="/Entwickler/mouse.svg" alt="Malpinsel" />
                            <img src="/Entwickler/screen.svg" alt="Orangefarbe" />
                            <img src="/Entwickler/calendar.svg" alt="Farbpallette" />
                        </div>
                    </div>
                    <div className={Class.card__body}>
                        <ProjectTitle>
                            <span>DOM</span>-<span className="underline txt-txt-100 uppercase">Dompteur</span>
                        </ProjectTitle>
                        <ProjectText>
                            <p>Der Browser ist eine wilde Bestie – unberechenbar, launisch und jederzeit bereit, aus der Manege zu brechen! 🦁🔥 Doch keine Sorge, als erfahrener Webdompteur zähme ich ihn mit präzisem Code und geschmeidigen Animationen.</p>  

                            <p><strong>HTML</strong>? Das ist die Peitsche, die Struktur gibt! <strong>CSS</strong>? Der elegante Tanz, der die Bestie in Form bringt! <strong>JavaScript</strong>? Die Magie, die sie zum Springen bringt! 🎩✨ Doch wehe, du gibst ihm fehlerhaften Code – dann brüllt er mit Fehlermeldungen und zerreißt dein Design in Stücke! 😱</p>  

                            <p>Aber keine Angst! Mit Disziplin, Geduld und einem scharfen Blick bringe ich <strong>Chrome</strong>, <strong>Firefox</strong> & <strong>Safari</strong> dazu, genau das zu tun, was sie sollen – eine perfekte Show liefern! 🎪🚀</p>
                        </ProjectText>
                    </div>
                </div>
            </div>
            {/* Card end */}
        </Wrapper>
    </Section>
  )
}

export default Services
