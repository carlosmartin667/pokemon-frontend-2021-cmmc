import React, { useState } from "react";
import { DataLogin } from "../helpers/DataLogin";

const LoginScrenn = ({ history }) => {
  const { handleLogin, pokemonData } = DataLogin(history);
  const { imgJuego, nombre, experiencia, hp, ataque, defensa, especial } =
    pokemonData;
  return (
    <>
      <div className="conatainer text-center">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://phantom-marca.unidadeditorial.es/2a6bb9293b020d388e4c1b1d3e640f1a/resize/1320/f/jpg/assets/multimedia/imagenes/2021/02/28/16145196328904.jpg"
                className="d-block w-100"
                alt="..."
                width="500"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-md-center ">
        <div className="card mb-3  bg" style={{ maxWidth: 540 }}>
          <div className="row g-0 ">
            <div className="col-md-4 mt-4">
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
                <h3 >{nombre}</h3>
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
          <button
            type="button"
            onClick={handleLogin}
            className="btn btn-outline-primary my-3"
          >
            ENTRAR
          </button>
        </div>
      </div>


    </>
  );
};

export default LoginScrenn;
