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


import "./Skills.scss"
import Section from '../Fragments/Section';
import Wrapper from '../Fragments/Wrapper';


function Skills() {

    const skillData = [
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

 return <>
    <Section id="skills" classname="skills">
        <Wrapper>
            <header className="section__header skills__header">
                <h2>Skills</h2>
                <p>[Small Description: the fact the basics like: HTML, CSS, and JS are the main Skills i have]</p>
            </header>
            <div className="skills">
                {
                    skillData && (
                        skillData.map(item => (
                            <div className="skill scroll__fadein" key={item.id} 
                                data-color={item.color}
                                >
                                    <div className="skill__header">
                                        <div className="skill__icon" title={item.title} dataname={item.name} style={{background:item.color}}>
                                            <FontAwesomeIcon icon={item.icon} size='2x'/>
                                        </div>
                                        <div className="skill__content">
                                            <h3 className='uppercase'>{item.title}</h3>
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
        </Wrapper>
    </Section>
 </>
}

export default Skills