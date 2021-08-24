import { useParams } from "react-router-dom";

import { Pokemon } from "../models/Pokemon";

export const DataDetalles = (history) => {
    let { name } = useParams();
    let  url  = Pokemon.find(x => x.name === name);

    const volver = () => {
        history.goBack();
    }

    return { url, name, volver };
};