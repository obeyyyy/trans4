import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Ensure you have emailjs imported

const recipientEmail = 'oubaye.ghammate@gmail.com'; // Change this to your actual email address
const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });
  

  const [status, setStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Email to you (the actual recipient)
    emailjs
      .send('service_5jpwfkx', 'template_k30wisr',formData, 'vaLI9kxgqJTTTpNHq')
      .then(
        () => {
          // Email sent to you successfully
          setStatus('Message sent successfully !');
        }
      )
      .catch((error) => {
        console.error('Email sending error:', error); // Log the error
        setStatus('Failed to send the confirmation email. Please try again.');
      });
  };
  
    
  return (
    <form onSubmit={sendEmail} className="contact-form">
      <label htmlFor="name">Name</label>
      <input type="text" name="from_name" id="name" value={formData.from_name} onChange={handleInputChange} required />

      <label htmlFor="email">Email</label>
      <input type="email" name="from_email" id="email" value={formData.from_email} onChange={handleInputChange} required />

      <label htmlFor="subject">Subject</label>
      <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleInputChange} required />

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleInputChange} required />

      <button type="submit">Send Message</button>
      <p className="status-message">{status}</p>
    </form>
  );
};

export default ContactForm;
