// src/components/About.jsx

import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">Acerca de mí</h2>
        <p className="about__text">
          Soy estudiante de la carrera “Analista de Sistemas de Computación”, actualmente me encuentro cursando el último año. Tengo conocimientos en desarrollo web (HTML, CSS, JavaScript - nivel Junior) y bases de datos. Me gusta aprender de forma autodidacta, trabajar en equipo y seguir creciendo como desarrollador.
        </p>
      </div>
      <a
          href="/portfolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="about__cv-btn"
        >
          DESCARGAR CV
        </a>
    </section>
  );
};

export default About;
