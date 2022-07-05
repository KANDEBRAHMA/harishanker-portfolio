import React,{useState} from 'react';
import { GoMarkGithub } from "react-icons/go";
import {BsLinkedin, BsInstagram} from "react-icons/bs";
import {motion} from 'framer-motion';
import profile from './profile.png';

import './Home.scss';

const Home = (props) => {
  const [link, setLink] = useState(null);

  return (
    <div id="home" className="app__header app__flex">
      <div className="app__home">
      <motion.img 
        whileInView={{x:[-200,0],y:[-200,0],opacity:[0,1]}}
        transition={{duration:3}}
        src={profile} alt="profile" />
      <motion.div
        whileInView={{x:[300,0],opacity:[0,1]}}
        transition={{duration:3}}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft:20}}>
              <h2>I am Harishanker Brahma Kande.</h2>
              <br />
              <p className="p-text">Master's student in Computer Science at <b>Indiana University Bloomington.</b></p>
              <br />
              <br />
              <motion.ul className="app__header-social">
                <motion.li
                  whileHover={{scale:1.5}}
                  transition={{type:'spring',stiffness:300,duration:3}}>
                  <a href={link} target = "_blank" onClick={() => setLink(props.link.github)}><GoMarkGithub /></a> 
                </motion.li>
                <motion.li
                  whileHover={{scale:1.5}}
                  transition={{type:'spring',stiffness:300,duration:3}}>
                  <a href={link} target = "_blank" onClick={() => setLink(props.link.linkedin)}><BsLinkedin /></a> 
                </motion.li>
                <motion.li
                  whileHover={{scale:1.5}}
                  transition={{type:'spring',stiffness:300,duration:3}}>
                  <BsInstagram />
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </div>
      </motion.div>
      </div>
    </div>
  )
}

export default Home;