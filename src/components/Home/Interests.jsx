import React from 'react';
import Programming from '../../assets/programming.png'
import Learn from "../../assets/learn.jpg"
import Videogames from "../../assets/videogames.webp"
import Music from "../../assets/music.avif"

const Interests = () => {
  return (
    <section className='home-section interest'>
      <h2>Gustos e Intereses</h2>
      <p>Me encanta programar, aprender nuevas tecnologías, escuchar musica y jugar videojuegos.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <img src={Programming} alt="Interés 1" />
        <img src={Learn} alt="Interés 2" />
        <img src={Music} alt="Interés 3" />
        <img src={Videogames} alt="Interés 3" />
      </div>
    </section>
  );
};

export default Interests;
