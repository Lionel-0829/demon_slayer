import './Main.css';
import { db } from '../../static/Arrays';
import DS from '../../assets/Main/ds-serie1.jpg'

function Main() {
  return (
    <div className="contenedor_general">
      <div className='Informacion'>
      <h1>Demon Slayer - Historia</h1>
      <p>En el Japón de la era Taisho, Tanjiro Kamado es un niño bondadoso que se gana la vida vendiendo carbón. Sin embargo, su apacible vida se ve truncada cuando un demonio asesina a toda su familia. Su hermana pequeña, Nezuko, es la única sobreviviente, ¡pero se ha transformado en un demonio! Tanjiro emprende un peligroso viaje para encontrar la manera de devolver a su hermana a la normalidad y destruir al demonio que arruinó su vida.</p>
      <img src={DS} alt="" />
      </div>
      <h1>Personajes</h1>
      {db}
    </div>
  );
}

export default Main;
