import React from 'react';
import Header from './Header';
import Interests from './Interests';
import ContactForm from './ContactForm';
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Header />
      <Interests />
      <ContactForm />
    </div>
  );
};

export default Home;
