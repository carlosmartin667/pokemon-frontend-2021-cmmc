import React from "react";
import PropTypes from "prop-types";
import Card from "../components/Card";

import { Pokemon } from "../models/Pokemon";
import { PokemonDatos } from "../models/PokemonDatos";

const Home = (props) => {
  const { pokemonListaData, fetchDataLista } = PokemonDatos();
  const personaje = pokemonListaData;

  return (
    <>
      <div className="container mt-3">
        <div className="alert alert-info" role="alert">
          todos
        </div>
        <hr />
        <div className="row">
          {personaje.map((man) => (
            <Card key={man.name} {...man} />
          ))}
        </div>
      </div>
      ;<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#">
        Previous
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        1
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        2
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        3
      </a>
    </li>
    <li className="page-item">
    <button className="btn btn-info" onClick={() => fetchDataLista(10)}>
        SALIR
      </button>
      <a className="page-link" href="#">
        Next
      </a>
    </li>
  </ul>
</nav>

      <button className="btn btn-danger" onClick={() => fetchDataLista(10)}>
        SALIR
      </button>
    </>
  );
};

Home.propTypes = {};

export default Home;
