import React from "react";
import { useFetch } from "../CustomHook/useFetch";
const urlRick = "https://rickandmortyapi.com/api/character/"
const Rick = ()=>{
    const { data, handlingNext: handlingRick } = useFetch(urlRick)
    
    return(
        <div>
            <h1>name: {data.name}</h1>
            <button onClick={()=> handlingRick("prev")}>Prev</button>
            <button onClick={()=> handlingRick("next")}>Next</button>
        </div>
    )

}

export default Rick;