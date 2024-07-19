import { useState } from 'react';
import Styles from './contactForm.module.scss';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setFormStatus('Please fill out all fields.');
      return;
    }
    emailjs.send('service_4r5ajpr', 'template_dkllo7f', {
      name: name,
      email: email,
      message: message,
    }, 'bNbjcd8pO6AFqTknZ') 
      .then((response) => {
        setFormStatus('Email sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        setFormStatus('Error sending email. Please try again later.');
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className={Styles.contact__form}>
      <form onSubmit={handleSubmit}>
        <div className={Styles.form__title}>
          <h2>Let’s work together!</h2>
          <p>I design and code beautifully simple things and I love what I do. Just simple like that!</p>
        </div>
        <div className={Styles.form__area}>
          <input
            type="text"
            placeholder='Full Name'
            value={name}
            name='name'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder='Email address'
            value={email}
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder='Message'
            value={message}
            name='message'
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send Message</button>
          {formStatus && <p>{formStatus}</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
