import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
    faCss3,
    faHtml5,
    faJsSquare,
    faReact,
    faTypo3,
    faWordpress,
} from '@fortawesome/free-brands-svg-icons';


import Section from '../Fragments/Section';
import Wrapper from '../Fragments/Wrapper';


function Skills() {

    const webSkills = [
        {
            id:1,
            name:"Reactjs",
            url:"#react",
            icon:faReact,
            title:"React",
            color:"#61DBFB",
            description:"4 Jahre Erfahrung"
        },
        {
            id:2,
            name:"Typo3",
            url:"#typo3",
            icon:faTypo3,
            title:"Typo3",
            color:"#ff8700",
            description:"4 Jahre Erfahrung"
        },
        {
            id:3,
            name:"Wordpress",
            url:"#wordpress",
            icon:faWordpress,
            title:"Wordpress",
            color:"#21759B",
            description:"4 Jahre Erfahrung"
        }
    ]


    const designSkills = [
        {
            id:1,
            name:"Adobe XD",
            url:"#xd",
            icon:"Icons/Xd.svg",
            title:"Adobe XD",
            color:"#470137",
            description:""
        },
        {
            id:2,
            name:"Photoshop",
            url:"#photoshop",
            icon:"Icons/Ps.svg",
            title:"Photoshop",
            color:"#001D34",
            description:""
        },
        {
            id:3,
            name:"Illustrator",
            url:"#illustrator",
            icon:"Icons/Ai.svg",
            title:"Illustrator",
            color:"#330000",
            description:""
        },
    ]

    const commSkills = [

    ]
 return <>
    <Section id="skills" classname="skills">
        <Wrapper>
            <header className="section__header">
                <h2>Skills</h2>
            </header>
            <div className="skills">
                <div className="skill skill__web">
                    <div className="skill__header">
                        <h3>Web</h3>
                        <p>[Small Description: the fact, that the basics like: HTML, CSS, and JS are of course a part of my skillset]</p>
                    </div>
                    {
                        webSkills && (
                            webSkills.map(item => (
                                <div className="skill scroll__fadein" key={item.id} 
                                    data-color={item.color}
                                    >
                                        <div className="skill__header">
                                            <div className="skill__icon" title={item.title} dataname={item.name} style={{background:item.color}}>
                                                <FontAwesomeIcon icon={item.icon} size='2x'/>
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
                <div className="skill skill__design">
                    <div className="skill__header">
                        <h3>Design</h3>
                        <p>[Small Description]</p>
                    </div>
                    {
                        designSkills && (
                            designSkills.map(item => (
                                <div className="skill scroll__fadein" key={item.id}>
                                    <div className="skill__header">
                                        <div className="skill__icon" style={{background:item.color}}>
                                            <img src={item.icon} alt={item.name} />
                                        </div>
                                        <div className="skill__content">
                                            <h4 className='uppercase'>{item.title}</h4>
                                        </div>
                                    </div>
                                    {item.description && (
                                        <div className="skill_description">
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
        </Wrapper>
    </Section>
 </>
}

export default Skills