import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './NavBar.scss';

function NavBar(props) {
    const [toggle, setToggle] = useState(false);
    const Navigation = () =>
    <nav className="app__navbar">
      <motion.ul className="app__navbar-list">
        {Object.entries(props.nav)
        .map( ([key, value]) => 
          <motion.li
          whileHover={{scale:1.2,originX:0}}
          transition={{type:'spring',stiffness:300,duration:3}}
          className="app__flex p-text" key={`link-${key}`}>
            <div />
            <a href={`#${key}`}>{value}</a>
          </motion.li>
        )}
      </motion.ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [-300, 0] }}
            transition={{duration: 0.85, ease: 'easeInOut'}}
          >
            <HiX onClick={() => setToggle(false)} />
            <motion.ul>
              {Object.entries(props.nav).map((key,value) => (
                <motion.li
                 whileHover={{scale:1.3,originX:0}}
                 transition={{type:'spring',stiffness:300,duration:3}}
                 key={key[0]}>
                  <a href={`#${key[0]}`} onClick={() => setToggle(false)}>
                    {key[1]}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </div>
    </nav>
  
  return (
    <>
    <Navigation />
    </>
  );
}

export default NavBar;
