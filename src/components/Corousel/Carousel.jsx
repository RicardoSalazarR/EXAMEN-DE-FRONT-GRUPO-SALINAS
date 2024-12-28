import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';
import Programming from '../../assets/programming.png';
import Learn from "../../assets/learn.jpg";
import Videogames from "../../assets/videogames.webp";
import Music from "../../assets/music.avif";
import './Carousel.css';

const Carousel = () => {
  const interests = [
    {
      img: Programming,
      description: 'Tecnología y Programación',
    },
    {
      img: Learn,
      description: 'Aprendizaje continuo',
    },
    {
      img: Videogames,
      description: 'Videojuegos',
    },
    {
      img: Music,
      description: 'Música',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="carousel-container">
      <h1 className="carousel-title">Mis Gustos e Intereses</h1>
      <Slider {...settings}>
        {interests.map((interest, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={interest.img}
              alt={interest.description}
              className="carousel-image"
            />
            <div className="carousel-caption">
              <p>{interest.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
