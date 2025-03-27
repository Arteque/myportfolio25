import Section from "../Fragments/Section"
import SectionHeader from "../Fragments/SectionHeader"
import Wrapper from "../Fragments/Wrapper"
import Class from './Services.module.scss'

const Services = () => {
  return (
    <Section classname="section__services" id="section__services">
        <Wrapper>
            <SectionHeader title1="Design, code" title2="&amp; REPEAT" />
        </Wrapper>
        <div className={Class.services__cards}>
            <div className={Class.service__card}>
                <div className={Class.card__header} style={{backgroundImage:'url(/Erfinder/cartoonFinderRoom.jpeg)'}}>
                    <div className={Class.header__main_image}>
                        <img src="/Erfinder/ErfinderAvatar.svg" alt="Erfinder à la Einstein" />
                    </div>
                    <div className={Class.header__assets_images}>
                        <img src="/Erfinder/LaborFlasche1.svg" alt="Labor Flasche" />
                        <img src="/Erfinder/Mikroskop.svg" alt="Mikroskop" />
                        <img src="/Erfinder/LaborMischFlasche1.svg" alt="Labor Mischflasche" />
                        <img src="/Erfinder/Element 3.svg" alt="Labor Mischflasche" />
                    </div>
                </div>
                <div className="card__body"></div>
            </div>
        </div>
    </Section>
  )
}

export default Services
