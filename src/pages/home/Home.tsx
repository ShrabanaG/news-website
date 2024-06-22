import React, { useState, useEffect } from 'react'
import AllNews from '../../components/AllNews'
import Search from '../../components/search/Search'

const api_key = process.env.REACT_APP_API_KEY;

const Home = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

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
        setData(data.articles);
    }

    const getAllNews = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&language=en&pageSize=20&apiKey=${api_key}`);
        const data = await response.json();
        console.log(data);
        setData(data?.articles);
    }

    console.log("Data", data);

    useEffect(() => {
        getAllNews();
    }, [])

    return (
        <div>
            <Search query={query} handleSearch={handleSearch} handleChange={handleInputChange} />
            <AllNews data={data} getAllNewsBySearch={handleGetAllNewsBySearch} />
        </div>
    )
}

export default Home