import './Main.css';
import { db } from '../../static/Arrays';

function Main({ agregarAlCarrito }) {
  return (
    <div className="contenedor_general">
      {db(agregarAlCarrito)}
    </div>
  );
}

export default Main;
