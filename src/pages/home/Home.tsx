import React, { useState, useEffect } from 'react'
import AllNews from '../../components/AllNews'
import Search from '../../components/search/Search'

import "./home.css";

const api_key = process.env.REACT_APP_API_KEY;

const Home = () => {
    const [query, setQuery] = useState("");
    const [news, setNews] = useState([]);

    const handleInputChange = (event: any) => {
        setQuery(event.target.value.toLowerCase());
    };

    const handleSearch = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${api_key}`);
        const data = await response.json();
        if (data.status === "ok") {
            console.log(data.articles);
        }
    };

    const handleGetAllNewsBySearch = async (item: string) => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&language=en&pageSize=10&category=${item}&apiKey=${api_key}`)
        const data = await response.json();
        console.log(data);
        setNews(Object.assign([], data?.articles));
    }

    const getAllNews = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&language=en&pageSize=20&apiKey=${api_key}`);
        const data = await response.json();
        console.log(data);
        setNews(Object.assign([], data?.articles));
    }

    console.log("Data", news);

    useEffect(() => {
        getAllNews();
    }, [])

    return (
        <div className="page">
            <Search query={query} handleSearch={handleSearch} handleChange={handleInputChange} />
            <AllNews news={news} handleGetAllNewsBySearch={handleGetAllNewsBySearch} />
        </div>
    )
}

export default Home