import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionHeader from '../Fragments/SectionHeader';
import { 
    faCss,
    faCss3,
    faFigma,
    faGit,
    faGithub,
    faHtml5,
    faJsSquare,
    faReact,
    faTypo3,
    faWordpress,
} from '@fortawesome/free-brands-svg-icons';


import Section from '../Fragments/Section';
import Wrapper from '../Fragments/Wrapper';
import { faInbox, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


function Skills() {

    let id = 0
    const webSkills = [
        {
            id:id++,
            name:"Reactjs",
            url:"#react",
            icon:faReact,
            img:"",
            title:"React",
            color:"#08d9ff",
            bg:"#292929",
            description:""
        },
        {
            id:id++,
            name:"Typo3",
            url:"#typo3",
            icon:faTypo3,
            img:"",
            title:"Typo3",
            color:"#fff",
            bg:"#ff8700",
            description:""
        },
        {
            id:id++,
            name:"Wordpress",
            url:"#wordpress",
            icon:faWordpress,
            img:"",
            title:"Wordpress",
            color:"#fff",
            bg:"#1790C5",
            description:""
        },
        {
            id:id++,
            name:"HTML",
            url:"#html",
            icon:faHtml5,
            img:"",
            title:"HTML",
            color:"white",
            bg:"linear-gradient(to right, #DD4B25 50%, #E96228 50% )",
            description:""
        },
        {
            id:id++,
            name:"Css",
            url:"#css",
            icon:faCss3,
            img:"",
            title:"Css",
            color:"white",
            bg:"linear-gradient(to right, #254BDD 50%, #2862E9 50% )",
            description:""
        },
        {
            id:id++,
            name:"Javscript",
            url:"#javscript",
            icon:faJsSquare,
            img:"",
            title:"Javscript",
            color:"black",
            bg:"linear-gradient(to right,rgb(195, 207, 24) 50%,rgb(255, 230, 0) 50% )",
            description:""
        },
        /*
        {
            id:id++,
            name:"Git",
            url:"#git",
            icon:faGit,
            img:"",
            title:"VCS",
            color:"#fff",
            bg:"orangered",
            description:"Version Control Software"
        },
        */
        {
            id:id++,
            name:"Github",
            url:"#git",
            icon:faGithub,
            img:"",
            title:"Github",
            color:"#fff",
            bg:"black",
            description:""
        },
        {
            id:id++,
            name:"Tailwind",
            url:"#tailwind",
            icon:"",
            img:"Icons/Tailwind.svg",
            title:"Tailwind",
            color:"",
            bg:"#151C2C",
            description:""
        },
        {
            id:id++,
            name:"Bootstrap",
            url:"#bootstrap",
            icon:"",
            img:"Icons/faBootstrap.svg",
            title:"Bootstrap",
            color:"",
            bg:"#7910F2",
            description:""
        }
        
    ]

    const designSkills = [
        {
            id:id++,
            name:"Adobe XD",
            url:"#xd",
            icon:"",
            img:"Icons/Xd.svg",
            title:"Adobe XD",
            color:"",
            bg:"#470137",
            description:""
        },
        {
            id:id++,
            name:"Figma",
            url:"#figma",
            icon:faFigma,
            img:"",
            title:"Figma",
            color:"",
            bg:"black",
            description:""
        },
        {
            id:id++,
            name:"Photoshop",
            url:"#photoshop",
            icon:"",
            img:"Icons/Ps.svg",
            title:"Photoshop",
            color:"",
            bg:"#001D34",
            description:""
        },
        {
            id:id++,
            name:"Illustrator",
            url:"#illustrator",
            icon:"",
            img:"Icons/Ai.svg",
            title:"Illustrator",
            color:"",
            bg:"#330000",
            description:""
        },
        {
            id:id++,
            name:"Lightroom",
            url:"#lightroom",
            icon:"",
            img:"Icons/lr.svg",
            title:"Lightroom",
            color:"",
            bg:"#001D34",
            description:""
        },
        {
            id:id++,
            name:"InDesign",
            url:"#indesign",
            icon:"",
            img:"Icons/id.svg",
            title:"InDesign",
            color:"",
            bg:"#47021E",
            description:""
        },
    ]

    const commSkills = [
        {
            id:id++,
            name:"Deutsch",
            url:"#deutsch",
            icon:"",
            img:"Icons/de.svg",
            title:"Deutsch",
            color:"",
            bg:"",
            description:"in Wort und Schrift"
        },
        {
            id:id++,
            name:"Französisch",
            url:"#französisch",
            icon:"",
            img:"Icons/fr.svg",
            title:"Französisch",
            color:"",
            bg:"",
            description:"in Wort und Schrift"
        },
        {
            id:id++,
            name:"Englisch",
            url:"#englisch",
            icon:"",
            img:"Icons/en.svg",
            title:"Englisch",
            color:"",
            bg:"",
            description:"in Wort und Schrift"
        },
        {
            id:id++,
            name:"Arabisch",
            url:"#arabisch",
            icon:"",
            img:"Icons/ar.svg",
            title:"Arabisch",
            color:"",
            bg:"",
            description:"in Wort und Schrift"
        },
    ]

 return <>
    <Section id="skills" classname="skills">
        <Wrapper>
            <SectionHeader title1="Mein digitales" title2="Werkzeugset"/>
            
            <div className="skills">
            <div className="skill skill__design">
                    <div className="skill__header">
                        <h3>- Design:  </h3>
                    </div>
                    <div className="grid__container">
                    {
                        designSkills && (
                            designSkills.map(item => (
                                <div className="icon-text-container border scroll__fadein" key={item.id}>
                                    <div className="skill__header">
                                        <div className="skill__icon" style={{background:item.color ? item.color : item.bg}}>
                                            {
                                                item.icon ?(
                                                    <FontAwesomeIcon icon={item.icon} size='2x' style={{color:item.color}}/>
                                                ):(
                                                    <img src={item.img} alt={item.title} />
                                                )
                                            }
                                        </div>
                                        <div className="skill__content">
                                            <h4 className='uppercase'>{item.title}</h4>
                                        </div>
                                    </div>
                                    {item.description && (
                                        <div className="skill__description">
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))
                        )
                    }
                    </div>
                </div>
                <div className="skill skill__web">
                    <div className="skill__header">
                        <h3>- Entwicklung:</h3>
                    </div>
                    <div className="grid__container">
                    {
                        webSkills && (
                            webSkills.map(item => (
                                <div className="icon-text-container border scroll__fadein" key={item.id} 
                                    data-color={item.color}
                                    >
                                        <div className="skill__header">
                                            <div className="skill__icon" title={item.title} dataname={item.name} style={{background:item.bg}}>
                                                {
                                                    item.icon ?(
                                                        <FontAwesomeIcon icon={item.icon} size='2x' style={{color:item.color}}/>
                                                    ):(
                                                        <img src={item.img} alt={item.title} />
                                                    )
                                                }
                                            </div>
                                            <div className="skill__content">
                                                <h4 className='uppercase'>{item.title}</h4>
                                            </div>
                                        </div>
                                        <div className="skill__description">
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                </div>
                            ))
                        )
                    }
                    </div>
                </div>
                <div className="skill skill__comm">
                    <div className="skill__header">
                        <h3>- Kommunikation:</h3>
                        
                    </div>
                    <div className="grid__container">
                    {
                        commSkills && (
                            commSkills.map(item => (
                                <div className="icon-text-container border scroll__fadein" key={item.id}>
                                    <div className="skill__header">
                                        <div className="skill__icon" style={{background:item.color ? item.color : item.bg}}>
                                            {
                                                item.icon ?(
                                                    <FontAwesomeIcon icon={item.icon} size='2x' style={{color:item.color}}/>
                                                ):(
                                                    <img src={item.img} alt={item.title} />
                                                )
                                            }
                                        </div>
                                        <div className="skill__content">
                                            <h4 className='uppercase'>{item.title}</h4>
                                        </div>
                                    </div>
                                    {item.description && (
                                        <div className="skill__description">
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))
                        )
                    }
                    </div>
                </div>
            </div>
        </Wrapper>
    </Section>
 </>
}

export default Skills