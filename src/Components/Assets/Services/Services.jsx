import ProjectText from "../Fragments/ProjectText"
import ProjectTitle from "../Fragments/ProjectTitle"
import Section from "../Fragments/Section"
import SectionHeader from "../Fragments/SectionHeader"
import Wrapper from "../Fragments/Wrapper"
import Class from './Services.module.scss'
import Age from "../../../Tools/Age"

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
                            <img src="/Erfinder/cartoonFinderRoom.jpg" alt="Labor Cartoon style" loading="lazzy"/>
                        </div>
                        <div className={Class.header__main_image}>
                            <img src="/Erfinder/ErfinderAvatar.svg" alt="Erfinder à la Einstein" loading="lazzy"/>
                        </div>
                        <div className={Class.header__assets_images}>
                            <img src="/Erfinder/LaborFlasche1.svg" alt="Labor Flasche"  loading="lazzy"/>
                            <img src="/Erfinder/LaborMischFlasche1.svg" alt="Labor Mischflasche" loading="lazzy" />
                            <img src="/Erfinder/Element 3.svg" alt="Labor Mischflasche"  loading="lazzy"/>
                            <img src="/Erfinder/Mikroskop.svg" alt="Mikroskop" loading="lazzy" />
                        </div> 
                    </div>
                    <div className={Class.card__body}>
                        <ProjectTitle >
                            <span className="txt-txt-100"> Ideen</span>-<span className="underline txt-txt-200 bg-call-400 uppercase">Erfinder</span>
                        </ProjectTitle>
                        <ProjectText>
                            <p>
                                Ich bin immer auf der Suche nach den <strong>richtigen Ideen</strong>, den <strong>passenden Lösungen</strong> und den perfekten Mischungen... <br /> 
                                Wie ein Wahnsinniger im Labor des <strong className="txt-txt-200">Webdesigns</strong>! <br />
                                <strong className="txt-txt-200">Pixel</strong>? Mein Elixier! <br />
                                <strong className="txt-txt-200">Code</strong>? Mein geheimnisvolles Serum! <br />
                                Jede <strong>Webseite</strong>, die ich erschaffe, ist eine Fusion aus Logik und Chaos – exakt berechnet, aber voller kreativer Explosionen! <br />
                                MUAHAHA! 😈💻⚡ <br></br>
                                ... Ja! Ich bin <small><small><small>{Age()} Jahre alt</small></small></small>
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
                            <img src="/Designer/cartoonDesignerRoom.jpg" alt="Hintergrund Designzimmer" loading="lazzy" />
                        </div>
                        <div className={Class.header__main_image}>
                            <img src="/Designer/DesignerAvatar.svg" alt="Avtar eines Designers. Er sieht wie Dali aus" loading="lazzy" />
                        </div>
                        <div className={Class.header__assets_images}>
                            <img src="/Designer/piplette.svg" alt="Piplette" loading="lazzy" />
                            <img src="/Designer/brush.svg" alt="Malpinsel" loading="lazzy" />
                            <img src="/Designer/colorOrange.svg" alt="Orangefarbe" loading="lazzy" />
                            <img src="/Designer/colorpalette.svg" alt="Farbpallette" loading="lazzy" />
                        </div>
                    </div>
                    <div className={Class.card__body}>
                        <ProjectTitle >
                            <span className="txt-txt-100">Pixel</span>-<span className="underline txt-txt-200 bg-call-400 uppercase">Artiste</span>
                        </ProjectTitle>
                        <ProjectText>
                            
                            <p>
                                <q> 
                                    Ich träume von meinen Gemälden und dann male ich meine Träume. 
                                </q> – Dalí🎨✨ <br />
                            Genauso ist es mit <strong>Webdesign</strong>! Erst träumen wir, dann <strong>designen wir</strong> – und manchmal schmilzt <strong>das Layout</strong> dahin wie eine "Dalí-Uhr" - <i><samp>#u got the ref.?</samp></i> -. 😅 <br />
                            Doch mit klarem Konzept, guter Recherche und einem Hauch Magie 🎭 wird aus jeder Website ein <strong>surreales Meisterwerk</strong>. 🚀
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
                            <img src="/Entwickler/cartoonDevRoom.jpg" alt="Zimmer eines Programmiers" loading="lazzy" />
                        </div>
                        <div className={Class.header__main_image}>
                            <img src="/Entwickler/EntwicklerAvatar.svg" alt="Avatar Programierer" loading="lazzy" />
                        </div>
                        <div className={Class.header__assets_images}>
                            <img src="/Entwickler/keyboard.png" alt="Computer Tastatur" loading="lazzy" />
                            <img src="/Entwickler/mouse.svg" alt="Rechner Mouse" loading="lazzy" />
                            <img src="/Entwickler/screen.png" alt="Bildschirm" loading="lazzy" />
                            <img src="/Entwickler/calendar.svg" alt="Kalendar" loading="lazzy" />
                        </div>
                    </div>
                    <div className={Class.card__body}>
                        <ProjectTitle >
                            <span className="txt-txt-100">DOM</span>-<span className="underline txt-txt-200 bg-call-400 uppercase">Dompteur</span>
                        </ProjectTitle>
                        <ProjectText>
                        <p>Als <strong>Web</strong>dompteur zähme ich mit <strong>präzisem Code</strong> die <strong>Browser</strong>-Bestie.&#129409; &#128526;</p> 
                        <p>Mit Disziplin, Geduld und einem scharfen Blick bringe ich <strong>Chrome</strong>, <strong>Firefox</strong> & <strong>Safari</strong> dazu, genau das zu tun, was sie sollen – eine perfekte Show liefern! 🎪🚀 &#129299;</p> 
                        <p>Doch wenn es um den Browser geht, dessen Name nicht genannt werden darf... <small></small><small></small><samp><code>Expl***</code></samp><small></small><small></small> &#128128; ? Da sind selbst meine Künste machtlos! 😅</p>
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
