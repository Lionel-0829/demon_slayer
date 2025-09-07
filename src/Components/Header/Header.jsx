import { useState } from 'react';
import Main from '../Main/Main';
import './Header.css';
import LogoTipo from '../../Assets/Logo/ds-Logo.png'

function Header() {
  return (
    <>
      <header className="encabezado">
        <img src={LogoTipo} alt="logo" title="Logo" />
        <nav className="menu">
          <a href="#">Nosotros</a>
          <a href="#">Productos</a>
          <a href="#">Contactos</a>
        </nav>
      </header>
    </>
  );
}

export default Header;

