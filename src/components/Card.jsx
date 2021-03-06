import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PokemonDatos } from "../models/DatoPokemon";

const Card = ({ name, url }) => {

  const pokemonData = PokemonDatos(url)
    
  const { imgJuego ,id} = pokemonData;
  return (
    <>
      <div
        className="card  bg-warning m-3 "
        style={{
          width: 170,
        }}
      >
        <img
          loading="lazy"
          className="card-img-top"
          style={{ width: "100%" }}
          src={imgJuego}
          alt={name}
          height="200"
        />

        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">
            <Link className="card-link" to={`/detalles/${id}`} >
              Ver Más...
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
Card.propTypes = {};

export default Card;
