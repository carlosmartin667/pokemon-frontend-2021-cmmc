import React, { useState } from "react";
import Card from "../components/Card";
import { PokemonDatos } from "../models/PokemonDatos";

const Home = (props) => {
  const { previous, Next, pokemonListaData, fetchDataLista, count, UltimoRegistro } = PokemonDatos();


  return (
    <>

      <div className="container mt-3">
        <div className="alert alert-warning" role="alert">
          pokemon total : {count} 
        </div>
        <hr />
        <div className="btn-toolbar row">
          <div className="col-md-1">
            <button
              className="btn btn-warning  "
              onClick={() => fetchDataLista('https://pokeapi.co/api/v2/pokemon')}
            >
              inicio
            </button>
          </div>
          <div className="col-md-1">
            <button
              className="btn btn-warning   "
              onClick={() => fetchDataLista(previous)}
            >
              atras
            </button>
          </div>
          <div className="col-md-1">

            <button
              className="btn btn-warning  "
              onClick={() => fetchDataLista(Next)}
            >
              siguiente
            </button>
          </div>

          <div className="col-md-1">
            <button
              className="btn btn-warning"
              onClick={() => fetchDataLista(UltimoRegistro)}
            >
              Ultimo
            </button>
          </div>


        </div>


        <div className="row">
          {pokemonListaData.map((man) => (
            <Card key={man.name} {...man} />
          ))}
        </div>

      </div>
    </>
  );
};

Home.propTypes = {};

export default Home;
