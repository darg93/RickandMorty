import React, { useState, useReducer, useContext, useMemo, useRef, useCallback } from 'react'
import ThemeContext from '../context/ThemeContext'
import Search from './Search';
import useCharacters from '../hooks/UseCharacter';

const initialState = {
    favorites: []
}

const API = 'https://rickandmortyapi.com/api/character/';

const favoriteReducer = (state, action) =>{
    switch (action.type){
        case 'ADD_TO_FAVORITE':
            return{
                ...state,
                favorites:[...state.favorites,action.payload]
            };
            default:
                return state;
    }
}

const Characters = () => {
    const [favorites, dispatch] = useReducer(favoriteReducer,initialState);
    const color = useContext(ThemeContext);
    const [search, setSearch] = useState('');
    const searchInput= useRef(null);
    //const [map, setMap] = useState(new Map());
    const [characters, setCharacters]=useCharacters(API)

    const handleClick = favorite =>{
        dispatch({type: 'ADD_TO_FAVORITE',payload:favorite})
    }

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value)
    },[])

    const filteredUsers = useMemo(()=>
        characters.filter((user)=>{
            return user.name.toLowerCase().includes(search.toLowerCase());
            }),
        
        [characters,search]
    )

    const likefunction = (character,id) =>{
        let aux=parseInt(characters.mapa.get(id))+1
        characters.mapa.set(id,aux)
        handleClick(character)
        setCharacters(characters)
    }

    return (
        <div className="">
        <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>
            
            <div className="Characters">

                {                    
                    filteredUsers.map( (character) => (
                        
                        <div className="Character">
                            <h2><p><b>{ character.name}</b></p></h2>
                            <figure>
                                <img src={character.image} alt={character.species} />
                                <figcaption>
                                    <p><b>Gender: </b> {character.gender}</p>
                                    <p><b>Origin: </b> {character.origin.name}</p>
                                    <p><b>Location: </b> {character.location.name}</p>
                                    <p><b>Specie: </b> {character.species}</p>
                                    <p><b>Status: </b> {character.status}</p>
                                    {characters.length >= 1 && <div className="item" key={character.id}>                            
                                        <button type="button" onClick={()=> likefunction(character,character.id)}>Like!  {characters.mapa.get(character.id)}</button>
                                    </div>}
                                </figcaption>
                            </figure>
                        </div>
                    ))
                }
            </div>
            <h1 style={color}>Characters you like!</h1>
            {favorites.favorites.map(favorite => (
                <p><b><li key={favorite.id}>
                    {favorite.name}
                </li></b></p>           
            ))}
            
        </div>
    );
};

export default Characters;

