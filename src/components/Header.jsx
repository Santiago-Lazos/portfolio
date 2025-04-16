// src/components/Header.jsx

import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__name">Santiago Lazos</h1>
        <h2 className="header__title">Estudiante</h2>
      </div>
    </header>
  );
};

export default Header;
