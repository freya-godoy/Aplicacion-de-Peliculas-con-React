import React, { useEffect, useState } from "react";
import Editar from "./Editar";

const Listado = ({listadoState, setListadoState}) => {
  //const [listadoState, setListadoState] = useState([]);

  const [editar, setEditar] = useState(0);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    if (peliculas) {
      setListadoState(peliculas);
    }
    return peliculas;
  };
  const borrarPeli = (id) => {
    // Conseguir peliculas almacenadas
    let pelis_almacenadas = conseguirPeliculas();
    // Filtrar esas peliculas para que elimine el array lo que no quiero
    let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id)) //Metodo filter():  crea un nuevo array con todos los elementos que cumplan la condicion implementada.El valor devuelto es un array con los elementos que cumplen una condicion, luego filter() llama a una condicion de callback sobre cada elemento del array.
    // Actualizar el listado 
    setListadoState(nuevo_array_peliculas);
    // Actualizar los datos en el localStorage
    localStorage.setItem('pelis', JSON.stringify(nuevo_array_peliculas))
  }

  //Siempre los hooks hay que mantenerlos arriba. Es decir que si por ejemplo voy a tener 50 funciones todos los hooks tienen que estar definidos antes.
  useEffect(() => {
    console.log("componentes del listado de peliculas cargados!");
    conseguirPeliculas();
  }, []);

  return (
    <>
      {listadoState.map((peli) => {
        if (peli) {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">
                {peli.descripcion}
              </p>

              <button className="edit"  onClick={() => {
                  setEditar(peli.id)
              }}>Editar</button>
              <button className="delete"onClick={() => borrarPeli(peli.id)}>Borrar</button>

              {/**aparece formulario de editar */}
              {editar === peli.id && (
                <Editar peli ={peli}
                conseguirPeliculas={conseguirPeliculas}
                setEditar={setEditar}
                setListadoState={setListadoState}
                />
              )}
            </article>
          );
        }
      })}
    </>
  );
};

export default Listado;
