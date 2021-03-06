import { useEffect, useState } from "react";


export const PokemonDatos = (url) => {
  const [pokemonData, setpokemondata] = useState({});

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setpokemondata({
        imgJuego: data.sprites.front_default,
        nombre: data.name,
        experiencia: data.base_experience,
        hp: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        especial: data.stats[3].base_stat,
        id : data.id
      });
    } catch (error) {}
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return  pokemonData ;
};
