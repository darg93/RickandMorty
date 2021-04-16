import {useState, useEffect} from 'react';

const useCharacters = url =>{
    const [characters, setCharacters]=useState([]);
    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                let mapa = new Map ()
                data.results.forEach((r)=>{
                    mapa.set(r.id,0)
                })
                data.results.mapa=mapa
                setCharacters(data.results)            
            })
    },[url])

    return [characters,setCharacters];
};

export default useCharacters;