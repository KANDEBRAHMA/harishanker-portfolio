import React from 'react';
import { motion } from 'framer-motion';
import {MdWork} from 'react-icons/md';
import {FaCalendarAlt} from 'react-icons/fa';
import './Work.scss';

function Work(props){
    return(
    <div id="workexp" className="app__work">
        <motion.div 
            whileInView={{duration:1,opacity:[0,1]}}
            className="app__work-header"
        >
            <h1> <MdWork /> Work Experience</h1>
        </motion.div>
        <motion.div className="app__work-item">
            {
                props.works.map((work,i) => (
                    <div key={i}>
                        <h2>{work.company}</h2>
                        <i>{work.position}</i>
                        <p><FaCalendarAlt /> {work.duration}</p>
                        <ul>
                            {
                                work.workcomments.map((comment,j)=>(
                                    <li key={j}>
                                        {comment}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </motion.div>
    </div>
    );
}

export default Work;