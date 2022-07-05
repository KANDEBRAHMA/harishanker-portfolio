import React,{useState} from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import './Education.scss';
import {HiX} from 'react-icons/hi';
import {FaDownload} from 'react-icons/fa';
import HarishankerBrahmaKande_Resume from './HarishankerBrahmaKande_Resume.pdf';

const Education = ({ education, skills }) => {
    const [viewSkill, setViewSkill] = useState(false);
    const [skillsList, setSkillsList] = useState({});
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [selectedId, setSelectedId] = useState(null)

    const handleClick = (skillSelected)=> {
        setSelectedSkill(skillSelected);
        setViewSkill(true);
        setSkillsList(skills[skillSelected]);
    };

    const handleClickClose = ()=> {
        setViewSkill(false);
    };

    return (
        <div id="education" className="app__skills-education">
            <div className="app__edu">
                <div className="app__edu-header">
                    <h2>Education</h2>
                </div>
                <motion.div  
                    whileInView={{ opacity: [0, 1] , x:[300,0]}}
                    transition={{ delayChildren: 1 }}
                >
                    {education.map((educations , i) => (
                        <>
                        <motion.div
                            whileHover={{scale:1.2}}
                            className="app__edu-item"
                            key={educations.college}
                        >
                        <motion.h2 
                            whileInView={{y:[-100,0]}}
                            className="bold-text"
                        >
                            {educations.major}
                        </motion.h2>
                        <p className="p-text">{educations.college}</p>
                        <i>GPA: {educations.gpa}</i>
                        <p className="bold-text">Graduation: {educations.graduation}</p>
                        </motion.div>
                        <br />
                        <br />
                        </>
                    ))}
                </motion.div>
            </div>
            <div className="app__skills">
                <div className="app__skills-item">
                    <h2>Skills</h2>
                    {
                        Object.entries(skills).map(([key,value]) => (
                            <div key={key}>
                                <a onClick={() => handleClick(key)}>
                                    {key}
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className="app__skills-list" style={{display:viewSkill?'':'none'}}>
                    {viewSkill && 
                        <>
                            
                            <h3>{selectedSkill} <HiX onClick={() => handleClickClose()}/></h3>
                            <motion.ul
                                whileInView={{x:[-100,20]}}
                            >
                                {skillsList.map((value,i)=>(
                                    <li key={i}>{value}</li>
                                ))}
                            </motion.ul>
                        </>
                    }
                </div>
            </div>
            <div className="app__resume">
                <a href={HarishankerBrahmaKande_Resume} download><FaDownload /> Resume</a>
            </div>
        </div>
      );
}

export default Education;