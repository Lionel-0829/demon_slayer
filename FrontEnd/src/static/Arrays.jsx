const array = [
  { codigo: 1, Nombre: "lio" },
  { codigo: 2, Nombre: "pepe" },
];

export const db = (agregarAlCarrito) =>
  array.map((i) => (
    <div className="contenedor" key={i.codigo}>
      <h1 className="txtCodigo">Código: {i.codigo}</h1>
      <h2 className="Nombre">Nombre: {i.Nombre}</h2>
      <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  ));

