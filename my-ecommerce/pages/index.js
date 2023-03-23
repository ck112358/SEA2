import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <Layout>
      <h2>Welcome to Stockholm Employee Association</h2>
      <p>Discover the best products at amazing prices</p>
      {/* Include any other sections, like featured products or categories */}
      <ContactForm />
    </Layout>
  );
};

export default HomePage;
