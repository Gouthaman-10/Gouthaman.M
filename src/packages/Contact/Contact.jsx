import { RiMap2Line } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { RiBook2Line } from "react-icons/ri";
import { RiSendPlaneLine } from "react-icons/ri";
import './Contact.css';
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setMessageColor('color-red');
      setFeedbackMessage('Write all the input fields');

      setTimeout(() => setFeedbackMessage(''), 3000);
      return;
    }

    emailjs
      .send(
        'service_o0evi1l',
        'template_vgqr70f',
        formData,
        'aelfMNaMY-IxGaKJL'
      )
      .then(
        () => {
          setMessageColor('color-first');
          setFeedbackMessage('Message sent ✔');

          setTimeout(() => setFeedbackMessage(''), 5000);

          setFormData({ name: '', email: '', subject: '', message: '' })
        },
        (error) => {
          alert('OOPs! SOMETHING WENT WRONG...!', error);
        },
      );
  };

  return (
    <section className="contact section">
      <h2 className="section-title">
        Contect <span>Me</span>
      </h2>

      <div className="contact-container container grid">
        <div className="contact-content grid">
          <div className="contact-card">
            <span className="contact-icon">
              <RiMap2Line />
            </span>

            <div>
              <h3 className="contact-title">Address</h3>
              <p className="contact-data">Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiUser3Line />
            </span>

            <div>
              <h3 className="contact-title">Developer | Colud Enginner</h3>
              <p className="contact-data">Available for Collaboration</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiMailLine />
            </span>

            <div>
              <h3 className="contact-title">Email</h3>
              <p className="contact-data">gouthamangoutham7@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiBook2Line />
            </span>

            <div>
              <h3 className="contact-title">Phone</h3>
              <p className="contact-data">+91 95006 93300</p>
            </div>
          </div>
        </div>

        <form action='' className="contact-form grid" onSubmit={sendEmail}>
          <div className="contact-form-group grid">
            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-label">
                Your Full Name <b>*</b>
              </label>

              <input
                type="text"
                name='name'
                className="contact-form-input"
                onChange={handleChange}
                value={formData.name}
              />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-label">
                Your Email ID <b>*</b>
              </label>

              <input
                type="email"
                name='email'
                className="contact-form-input"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </div>

          <div className="contact-form-div">
            <label className="contact-form-label">
              Your Subject <b>*</b>
            </label>

            <input
              type="text"
              name='subject'
              className="contact-form-input"
              onChange={handleChange}
              value={formData.subject}
            />
          </div>

          <div className="contact-form-div">
            <label htmlFor="" className="contact-form-label">
              Your Message <b>*</b>
            </label>

            <textarea
              name='message'
              className="contact-form-input contact-form-area"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </div>

          <div className="contact-button">
            <button className="button">
              Send Message
              <span className='button-icon'><RiSendPlaneLine /></span>
            </button>
          </div>

          {feedbackMessage && (
            <p className={`contact-message ${messageColor}`}>
              {feedbackMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
