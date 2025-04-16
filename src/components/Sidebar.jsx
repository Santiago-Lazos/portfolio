import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src="/perfil.jpeg" alt="Foto de perfil" className="sidebar__image" />

      <div className="sidebar__info">
        <p className="sidebar__text">📍 Villa María, Córdoba, Argentina</p>
        <hr className="sidebar__line" />
        <p className="sidebar__text">📧 santiago.daniel.lazos@gmail.com</p>
        <hr className="sidebar__line" />
        <p className="sidebar__text">🇬🇧 Inglés nivel medio</p>
        
      </div>

        <a
          href="https://wa.me/5493534762640?text=Hola%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar__contact-btn"
        >
          CONTACTO
        </a>

      
    </aside>
  );
};

export default Sidebar;
