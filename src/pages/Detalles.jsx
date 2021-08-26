import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataDetalles } from "../helpers/DataDetalles";

const Detalles = ({ history }) => {

  const { id } = useParams();
  const { pokemonData, volver } = DataDetalles(history, id);
  const { ataque,
    defensa,
    especial,
    experiencia,
    hp,
    imgJuego,
    nombre } = pokemonData
  console.log(pokemonData);
  return (
    <>
      <div className="conatainer mx-5 mt-4">
        
          <div className="card mb-3 text-white bg-dark" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  loading="lazy"
                  className="card-img-top"
                  style={{ width: "100%" }}
                  src={imgJuego}
                  alt={nombre}
                  height="200"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{nombre}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">ataque : {ataque}</li>
                    <li className="list-group-item">defensa : {defensa}</li>
                    <li className="list-group-item">especial : {especial}</li>
                    <li className="list-group-item">experiencia : {experiencia}</li>
                    <li className="list-group-item">hp : {hp}</li>
                  </ul>
                </div>
              </div>
            </div>
         
        </div>
        <button type="button" className="btn btn-outline-info" onClick={volver}> volver</button>

      </div>
    </>
  );
};

export default Detalles;
