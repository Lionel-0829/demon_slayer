import { useState } from 'react';
import Main from '../Main/Main';
import './Header.css';

function Header() {
  const [carrito, setCarrito] = useState(0);

  function agregarAlCarrito() {
    setCarrito(carrito + 1);
  }

  return (
    <>
      <header className="encabezado">
        <img src="" alt="logo" title="Logo" />
        <nav className="menu">
          <a href="#">Nosotros</a>
          <a href="#">Productos</a>
          <a href="#">Contactos</a>
        </nav>
        <p className="carrito">
          🛒 {carrito >= 10 ? 'carrito completo' : carrito}
        </p>
      </header>

      <main>
        <Main agregarAlCarrito={agregarAlCarrito} />
      </main>
    </>
  );
}

export default Header;

