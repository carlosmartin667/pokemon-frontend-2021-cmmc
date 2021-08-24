import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { Pokemon } from "../models/Pokemon";

export const PokemonDatos = () => {
  const [pokemonListaData, setpokemonListadata] = useState([]);
  const [pokemonData, setpokemondata] = useState({});

  const fetchDataLista = async () => {
    const res = await fetch(
      ` https://pokeapi.co/api/v2/pokemon?offset=0&limit=9`
    );
    const data = await res.json(); 
    setpokemonListadata(data.results);
   
  };
  const fetchData = async (id) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setpokemondata({
        imgJuego: data.sprites.front_default,
        nombre: data.name,
        experiencia: data.base_experience,
        hp: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        especial: data.stats[3].base_stat,
      });
    } catch (error) {}
  };

  useEffect(() => {
    fetchDataLista();
    fetchData(1);
  }, []);

  return {pokemonListaData};
};
