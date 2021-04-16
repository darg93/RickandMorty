import React from 'react';
import '../index.css';

const Search = ({search, searchInput, handleSearch}) =>{

    return(
        <input className="Search" type="text" placeholder="Search..." value={search} ref={searchInput} onChange={handleSearch}/>
    );
}

export default Search;