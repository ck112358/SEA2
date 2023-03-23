import React from 'react';

const ContactForm = () => {
  // Handle form submission here

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" />

      <label htmlFor="message">Message:</label>
      <textarea id="message" rows="4" cols="50"></textarea>

      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
