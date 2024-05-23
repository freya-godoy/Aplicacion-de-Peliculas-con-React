import Buscador from "./components/Buscador";
import Listado from "./components/Listado";
import Crear from "./components/Crear";
import { useState } from "react";

function App() {
  const [listadoState, setListadoState] = useState([]);
  return (
    <div class="layout">
      {/* CABECERA */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>MisPelis</h1>
      </header>

      {/* BARRA DE NAVEGACION */}
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Peliculas</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <section id="content" className="content">
        {/* Aqui va el listado de peliculas */}
        <Listado listadoState={listadoState} setListadoState={setListadoState}></Listado>
      </section>

      {/* BARRA LATERAL */}
      <aside className="lateral">
        <Buscador listadoState={listadoState} setListadoState={setListadoState}></Buscador>
        <Crear setListadoState={setListadoState}></Crear>
      </aside>

      {/* PIE DE PAGINA */}
      <footer className="footer">
        &copy; Máster en React -{" "}
        <a href="https://gatitoespacialweb.ar">gatitoespacialweb.ar</a>
      </footer>
    </div>
  );
}

export default App;
