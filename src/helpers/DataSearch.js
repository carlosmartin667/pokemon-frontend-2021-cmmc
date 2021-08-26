import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { Pokemon } from "../models/Pokemon";
import { PokemonDatos } from "../models/PokemonDatos";

export const DataSearchs = (history) => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [inputValue, setInputValue] = useState(q);
  const [characters, setCharacters] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${inputValue}`);
  };

  const getCharacters = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=1118`
    );
    const data = await res.json();

    if (inputValue.trim() !== "" && inputValue.length > 2) {
      const value = inputValue.toLocaleLowerCase();

      console.log();
      const newValue = data.results.filter((character) =>
        character.name.toLocaleLowerCase().includes(value)
      );

      setCharacters(newValue);
    } else {
      setCharacters([]);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [q]);

  return { handleSubmit, inputValue, handleChange, characters };
};
