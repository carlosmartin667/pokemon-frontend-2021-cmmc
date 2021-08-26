import { useEffect, useState } from "react";

export const DataDetalles = (history, id) => {

    const [pokemonData, setpokemondata] = useState({});

    const fetchData = async (id) => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
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
        } catch (error) { }
    };
    const volver = () => {
        history.goBack();
    }
    useEffect(() => {
        fetchData(id);
    }, []);


    return { pokemonData, volver };
};