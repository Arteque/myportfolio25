import Section from "../Fragments/Section"
import SectionHeader from "../Fragments/SectionHeader"
import Wrapper from "../Fragments/Wrapper"
import Class from './Services.module.scss'

const Services = () => {
  return (
    <Section classname="section__services" id="section__services">
        <Wrapper>
            <SectionHeader title1="Erfinde, designe, kodiere" title2="&amp; REPEAT &#128257;" />
            {/* Card Start */}
            <div className={Class.services__cards}>
                <div className={Class.service__card}>
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
                    <div className="card__body">
                        <h3><span>Ideen</span>-<span className="underline txt-call-100 uppercase">Erfinder</span></h3>
                        <p>
                            Ich bin immer auf der Suche nach den <strong>richtigen Ideen</strong>, den <strong>passenden Lösungen</strong> und den perfekten Mischungen... <br /> 
                            Wie ein Wahnsinniger im Labor des <strong className="txt-call-100">Webdesigns</strong>! <br />
                            <strong className="txt-call-100">Pixel</strong>? Mein Elixier! <strong className="txt-call-100">Code</strong>? Mein geheimnisvolles Serum! <br />
                            Jede <strong>Webseite</strong>, die ich erschaffe, ist eine Fusion aus Logik und Chaos – exakt berechnet, aber voller kreativer Explosionen! <br />
                            MUAHAHA! 😈💻⚡ <br></br>
                            ... Ja! Ich bin <small><small><small>42Jahre alte</small></small></small>
                        </p>
                    </div>
                </div>
            </div>
            {/* Card end */}

            {/* Card Start */}
            <div className={Class.services__cards}>
                <div className={Class.service__card}>
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
                    <div className="card__body">
                        <h3><span>Ideen</span>-<span className="underline txt-call-100 uppercase">Erfinder</span></h3>
                        <p>
                            Ich bin immer auf der Suche nach den <strong>richtigen Ideen</strong>, den <strong>passenden Lösungen</strong> und den perfekten Mischungen... <br /> 
                            Wie ein Wahnsinniger im Labor des <strong className="txt-call-100">Webdesigns</strong>! <br />
                            <strong className="txt-call-100">Pixel</strong>? Mein Elixier! <strong className="txt-call-100">Code</strong>? Mein geheimnisvolles Serum! <br />
                            Jede <strong>Webseite</strong>, die ich erschaffe, ist eine Fusion aus Logik und Chaos – exakt berechnet, aber voller kreativer Explosionen! <br />
                            MUAHAHA! 😈💻⚡ <br></br>
                            ... Ja! Ich bin <small><small><small>42Jahre alte</small></small></small>
                        </p>
                    </div>
                </div>
            </div>
            {/* Card end */}
        </Wrapper>
    </Section>
  )
}

export default Services
