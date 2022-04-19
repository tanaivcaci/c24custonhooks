import React from "react";
import { useFetch } from "../CustomHook/useFetch";

const Generic = ({ url })=>{
    const { data, handlingNext } = useFetch(url);

    return(
        <div>
            <h1>name: {data.name}</h1>
            <button onClick={()=> handlingNext("prev")}>Prev</button>
            <button onClick={()=> handlingNext("next")}>Next</button>
        </div>
    )

}

export default Generic;