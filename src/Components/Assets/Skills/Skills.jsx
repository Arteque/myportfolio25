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
            name:"HTML",
            url:"#html",
            icon:faHtml5,
            title:"HTML5",
            color:"linear-gradient(to right, #e34c26 50%, #f06529 51%)",
            description:"4 Jahre Erfahrung"
        },
        {
            id:2,
            name:"CSS",
            url:"#css",
            icon:faCss3,
            title:"CSS3",
            color:"linear-gradient(to right, #264de4 50%, #2965f1 50%)",
            description:"4 Jahre Erfahrung"
        },
        {
            id:3,
            name:"Javscript",
            url:"#javascript",
            icon:faJsSquare,
            title:"Javascript",
            color:"linear-gradient(to right, #E5A126 50%,rgb(150, 119, 19) 50%)",
            description:"4 Jahre Erfahrung"
        },
        {
            id:4,
            name:"Reactjs",
            url:"#react",
            icon:faReact,
            title:"React",
            color:"#61DBFB",
            description:"4 Jahre Erfahrung"
        },
        {
            id:5,
            name:"Typo3",
            url:"#typo3",
            icon:faTypo3,
            title:"Typo3",
            color:"#ff8700",
            description:"4 Jahre Erfahrung"
        },
        {
            id:6,
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