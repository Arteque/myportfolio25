import { useEffect, useState } from 'react';
import ProjectText from '../Fragments/ProjectText';
import Class from './About.module.scss';

const About = () => {
    
    const [age, setAge] = useState("42")

    useEffect(()=>{
        const birthDate = new Date("1982-11-29")
        const currentDate = new Date()
        const birthDateInMS =  birthDate.getFullYear()
        const currentDateInMS = currentDate.getFullYear()

        const timeBetween = currentDateInMS - birthDateInMS
        
        console.log(currentDateInMS, birthDateInMS, timeBetween)

        setAge(timeBetween)
    },[])

  return (
    <div className={`about__container ${Class.about_container}`}>
      <figure className={`blur_fadein about_figure ${Class.about_figure}`}>
            <img  loading='lazzy' src="https://res.cloudinary.com/www-arteque-de/image/upload/v1581433762/arteque/profil/amdprofil.png" alt="Ahmed Lemssiah Profilbild" />
            <figcaption>Ahmed Lemssiah</figcaption>
      </figure>
      <ProjectText>
        <p>Hey! Schön, dass du hier bist 😊</p>

        <p><strong>Noch einmal zur Form:</strong> Ich heiße <strong>Ahmed <span className="uppercase">Lemssiah</span></strong>, bin <strong>{age}</strong> Jahre alt, komme aus <strong>Marokko</strong> und lebe derzeit in <strong>Deutschland Thüringen</strong>. 
        Glücklicher Papa von zwei Kindern &#128111; und Ehemann einer wundervollen Frau 🤗</p>

        <p>Ich habe französische Literatur und Kommunikation studiert und sogar eine Zeit lang als Französischlehrer gearbeitet &#127979;. Doch meine wahre Leidenschaft liegt im <strong>Gestalten und Programmieren</strong> – und genau das habe ich zu meinem Beruf gemacht.</p>
      </ProjectText>
    </div>
  )
}

export default About
