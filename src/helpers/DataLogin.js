import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

export const DataLogin = (history) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        dispatch({ type: authTypes.login });
        history.push("/");
    };
    const [pokemonData, setpokemondata] = useState({});

    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
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
        const ramdom = getRandomInt(1, 152);
        fetchData(ramdom);
    }, []);

    return {handleLogin, pokemonData};
};