import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { Pokemon } from "../models/Pokemon";

export const PokemonDatos = (start) => {
  const [pokemonListaData, setpokemonListadata] = useState([]);


  const fetchDataLista = async (start) => {
    const res = await fetch(
      ` https://pokeapi.co/api/v2/pokemon?offset=${start}&limit=10`
    );
    const data = await res.json();
    setpokemonListadata(data.results);
  };

  useEffect(() => {
    fetchDataLista(1 );
  }, [start]);

  return { pokemonListaData , fetchDataLista};
};
