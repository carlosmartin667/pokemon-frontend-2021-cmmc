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
        <div
          className="card border-primary text-center"
          style={{ maxWidth: "32rem" }}
        >
          <div className="row">
            <div className="col-4">
              <img
                src={imgJuego}
                className="img-fluid rounded-start"
                alt={imgJuego}
                width="500"
                height="400"
              />
            </div>
            <div className="col-8">
              <h5 className="card-title">{nombre}</h5>
              <p className="card-text">
                {experiencia}, {hp}, {ataque}, {defensa}, {especial}
              </p>
              <h4 className="my-3">Vienvenido a pokedex con 100 pokemon</h4>

              <button
                type="button"
                onClick={handleLogin}
                className="btn btn-outline-primary my-3"
              >
                ENTRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScrenn;
