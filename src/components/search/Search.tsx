import React, { useState } from 'react';

import { FaSearch } from 'react-icons/fa';

const api_key = process.env.REACT_APP_API_KEY;

const Search = () => {
    const [query, setQuery] = useState("");

    const handleInputChange = (event: any) => {
        setQuery(event.target.value.toLowerCase());
    };

    const handleSearch = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${api_key}`);
        const data = await response.json();
        if (data.status === "ok") {
            console.log(data.articles);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>
                <FaSearch />
            </button>
        </div>
    )
}

export default Search