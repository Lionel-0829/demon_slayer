const array = [
  { 
    Codigo: 1, 
    Nombre: "Tanjiro Kamado",
    Años: 16,
    Afiliacion:"Demon Slayer",
    Img:"../../public/personajes/a1.webp"
  },
  { 
    Codigo: 2, 
    Nombre: "Nezuko Kamado",
    Años: 14,
    Afiliacion:"Demon Slayer",
    Img:"../../public/personajes/a2.webp"
  },
  { 
    Codigo: 3, 
    Nombre: "Giyu Tomioka",
    Años: 21,
    Afiliacion:"Hashira",
    Img:"../../public/personajes/a3.webp"
  },
  { 
    Codigo: 4, 
    Nombre: "Kyojuro Rengoku",
    Años: 20,
    Afiliacion:"Hashira",
    Img:"../../public/personajes/a4.webp"
  },
  { 
    Codigo: 5, 
    Nombre: "Sabito",
    Años: 13,
    Afiliacion:"Demon Slayer",
    Img:"../../public/personajes/a5.webp"
  },
  { 
    Codigo: 6, 
    Nombre: "Muichiro Tokito",
    Años: 14,
    Afiliacion:"Hashira",
    Img:"../../public/personajes/a6.webp"
  },
  { 
    Codigo: 7, 
    Nombre: "Tengen Uzui",
    Años: 23,
    Afiliacion:"Hashira",
    Img:"../../public/personajes/a7.webp"
  },
  { 
    Codigo: 8, 
    Nombre: "Zenitsu Agatsuma",
    Años: 16,
    Afiliacion:"Demon Slayer",
    Img:"../../public/personajes/a8.webp"
  },
  { 
    Codigo: 9, 
    Nombre: "Inosuke Hashibira",
    Años: 15,
    Afiliacion:"Demon Slayer",
    Img:"../../public/personajes/a9.webp"
  },
  { 
    Codigo: 10, 
    Nombre: "Akasa",
    Años: 133,
    Afiliacion:"Twelve Demon Moons",
    Img:"../../public/personajes/a10.webp"
  },
  { 
    Codigo: 11, 
    Nombre: "Kanao Tsuyuri",
    Años: 16,
    Afiliacion:"Demon Slayer",
    Img:"../../public/personajes/a11.webp"
  },
  { 
    Codigo: 12, 
    Nombre: "Muzan Kibutsuji",
    Años: 10000,
    Afiliacion:"Twelve Demon Moons",
    Img:"../../public/personajes/a12.webp"
  },
  { 
    Codigo: 13, 
    Nombre: "Mitsuri Kanroji",
    Años: 19,
    Afiliacion:"Hashira",
    Img:"../../public/personajes/a13.webp"
  },
  { 
    Codigo: 14, 
    Nombre: "Obanai Iguro",
    Años: 21,
    Afiliacion:"Hashira",
    Img:"../../public/personajes/a14.webp"
  },
  { 
    Codigo: 15, 
    Nombre: "Shinobu Kocho",
    Años: 18,
    Afiliacion:"Hashira",
    Img:"../../public/personajes/a15.webp"
  }
];

export const db = array.map((i)=>{
  return(
    <div className="contenedor" key={i.Codigoodigo}>
      <h1 className="txtCodigo">Código: {i.Codigo}</h1>
      <img src={i.Img} alt=""/>
      <h2 className="Nombre">Nombre: {i.Nombre}</h2>
      <h2 className="Nombre">Afiliacion: {i.Afiliacion}</h2>
      <h1 className="txtCodigo">Años: {i.Años}</h1>
    </div>
  )
});

