import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { Pokemon } from "../models/Pokemon";

export const PokemonDatos = (start) => {
  const [pokemonListaData, setpokemonListadata] = useState([]);

  const [previous, setPrevious] = useState('')
  const [Next, setNext] = useState('')
  const fetchDataLista = async (start) => {
    console.log(start);
    const res = await fetch(
      start
    );
    const data = await res.json();
    setNext(data.next)
    setPrevious(data.previous)
    setpokemonListadata(data.results);
   
  };

  useEffect(() => {
    fetchDataLista('https://pokeapi.co/api/v2/pokemon');
  }, [start]);

  return {Next, previous ,pokemonListaData , fetchDataLista};
};
