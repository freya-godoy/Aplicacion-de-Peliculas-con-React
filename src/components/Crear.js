import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

const Crear = ({setListadoState}) => {
  const tituloComponente = "Añadir pelicula";
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });
  const { titulo, descripcion } = peliState;
  const conseguirDatosForm = (e) => {
    e.preventDefault(); //Evita que se reinicie la pagina
    // Conseguir datos del formulario
    const target = e.target;
    const titulo = target.titulo.value;
    const descripcion = target.descripcion.value;
    //alert(titulo + "-" + descripcion);
    // Crear objeto de la pelicula a guardar
    const peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };
    //Guardar estado (directamente para reflejar cambios en la interfaz del usuario)
    setPeliState(peli); // Asigana el estado
    // Actualizar el estado del estado actual
    setListadoState(elementos => {
      return[...elementos,peli]
    })
    // Guardar en el almacenamiento local
    GuardarEnStorage("pelis",peli);
    // GuardarEnStorage("copia_datos",peli); // Es otro elemento, dentro del localStorage. "copia_datos" guarda los items dentro del propio localStorage
    // Es un metodo generico que me sirve para: guardar un array de objetos en el localStorage con una clave que yo le diga
  };
  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {titulo && descripcion && "Has creado la pelicula:" + peliState.titulo}{" "}
        {/*cuando se cumplen las condiciones muestra el titulo*/}
      </strong>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Descripción"
        ></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};

export default Crear;
