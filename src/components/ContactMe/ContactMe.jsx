import React, { useState ,useRef} from 'react';
import {MdCall} from 'react-icons/md';
import {GoMail} from 'react-icons/go';
import {MdLocationOn} from 'react-icons/md';
import emailjs from '@emailjs/browser';
import './ContactMe.scss';

const ContactMe = ({contacts}) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;
  const form = useRef();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    console.log(formData);
    e.preventDefault();

    emailjs.sendForm('service_rxip26i', 'template_nc66tge', form.current , 'GWoln6wbzvSk9seFC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setIsFormSubmitted(true);
    setLoading(false);
  };

  return (
    <div id="contact">
      <h2 className="head-text">Contact Me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <GoMail />
          <a href="mailto:hello@micael.com" className="p-text">{contacts.email}</a>
        </div>
        <div className="app__footer-card">
          <MdCall />
          <a href="tel:+1 (123) 456-7890" className="p-text">{contacts.mobile}</a>
        </div>
        <div className="app__footer-card">
          <MdLocationOn />
          <a className="p-text">{contacts.address}</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
            <form ref={form} onSubmit={handleSubmit}>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} required/>
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} required/>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
          </form>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </div>
  );
};

export default ContactMe;