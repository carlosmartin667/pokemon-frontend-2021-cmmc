import { useEffect, useState } from "react";


export const PokemonDatos = (start) => {
  const [pokemonListaData, setpokemonListadata] = useState([]);
  const [count, setcount] = useState('')
  const [previous, setPrevious] = useState('')
  const [Next, setNext] = useState('')
  const [UltimoRegistro, setUltimoRegistro] = useState('')


  const fetchDataLista = async (start) => {
    console.log(start);
    const res = await fetch(
      start
    );
    const data = await res.json();
    setNext(data.next)
    setPrevious(data.previous)
    setcount(data.count)
    setpokemonListadata(data.results);
    setUltimoRegistro(`https://pokeapi.co/api/v2/pokemon?offset=${parseInt(data.count / 20)*20}&limit=20"` )
  };

  useEffect(() => {
    fetchDataLista('https://pokeapi.co/api/v2/pokemon');
  }, [start]);

  return { Next, previous, pokemonListaData, fetchDataLista, count, UltimoRegistro };
};
