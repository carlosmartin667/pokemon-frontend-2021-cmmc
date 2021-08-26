import React from "react";
import Card from "../components/Card";
import { PokemonDatos } from "../models/PokemonDatos";

const Home = (props) => {
  const { previous ,Next ,pokemonListaData, fetchDataLista } = PokemonDatos();
  const personaje = pokemonListaData;
  
  return (
    <>
      <div className="container mt-3">
        <div className="alert alert-info" role="alert">
          pokemon 100
        </div>
        <hr />
        <div className="row">
          {personaje.map((man) => (
            <Card key={man.name} {...man} />
          ))}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button
                className="btn btn-info"
                onClick={() => fetchDataLista(previous)}
              >
                atras
              </button>
            </li>
            <li className="page-item">
              <button
                className="btn btn-info"
                onClick={() => fetchDataLista('https://pokeapi.co/api/v2/pokemon')}
              >
                inicio
              </button>
            </li>
            <li className="page-item">
              <button
                className="btn btn-info"
                onClick={() => fetchDataLista(Next)}
              >
                siguiente
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

Home.propTypes = {};

export default Home;
