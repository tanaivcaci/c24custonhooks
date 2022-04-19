import {useState, useEffect} from "react";
const url = "https://rickandmortyapi.com/api/character/";
export const useFetch = ()=>{
    const [ data, setData]= useState([]);

    //el useEffect solo se ejecuta cuando cambie algo en el estado, y este haya sido nombrado en el array de dependency
    useEffect(()=>{
        const request = async()=>{
            fetch(url)
                .then(response => response.json())
                    .then(resolved => setData(resolved))
        }
        request();
    }, []);

    

    return {
        data, 
    }

}