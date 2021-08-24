import React, { useState } from "react";
import { DataLogin } from "../helpers/DataLogin";

const LoginScrenn = ({ history }) => {
  const {handleLogin, pokemonData} = DataLogin(history);
  const {imgJuego, nombre,experiencia, hp, ataque, defensa, especial}= pokemonData;
  return (
    <>
      <div className="conatainer mt-5 text-center">
        <div className="conatainer mt-5 text-center">
          <img src={imgJuego} alt="" />
        </div>
        <h3>{nombre}</h3>
        <h1 className="my-3">Vienvenido a pokedex</h1>
        <button
          type="button"
          onClick={handleLogin}
          className="btn btn-outline-primary my-3"
        >
          ENTRAR
        </button>
      </div>
    </>
  );
};

export default LoginScrenn;
