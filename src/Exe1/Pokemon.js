import React from "react";
import { useFetch } from "../CustomHook/useFetch";
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"
const Pokemon = ()=>{
    const { data, handlingNext: handlingPoke} = useFetch(urlPokemon)

    return(
        <div>
            <h1>name: {data.name}</h1>
            <button onClick={()=> handlingPoke("prev")}>Prev</button>
            <button onClick={()=> handlingPoke("next")}>Next</button>
        </div>
    )

}

export default Pokemon;