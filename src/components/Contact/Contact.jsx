import React from 'react';
import {MdCall} from 'react-icons/md';
import {GoMail} from 'react-icons/go';
import {MdLocationOn} from 'react-icons/md';
import { motion } from 'framer-motion';
import './Contact.scss';

const Contact = ({contacts}) => {
  return (
      <div id="contact">
          <div className="app__heading">
              <h1>Contact Me</h1>
          </div>
          <div className="app__content">
              <div>
                  <a href="tel:+1 (812) 778-6920" className="p-text"><MdCall />{contacts.mobile}</a>
              </div>
              <div>
                  <a href="mailto:harishanker.kande@gmail.com" className="p-text"><GoMail /> {contacts.email}</a>
              </div>
              <div>
                  <a><MdLocationOn /> {contacts.address}</a>
              </div>
          </div>
      </div>
  )
}

export default Contact;