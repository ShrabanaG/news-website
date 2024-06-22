import React, { useState } from 'react';

import { FaSearch } from 'react-icons/fa';



const Search = ({ query, handleSearch, handleChange }: any) => {


    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
            />
            <button onClick={handleSearch}>
                <FaSearch />
            </button>
        </div>
    )
}

export default Search