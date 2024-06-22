import React, { useEffect, useState } from 'react'
import Card from './card/Card';

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const api_key = process.env.REACT_APP_API_KEY;


const AllNews = () => {
    const [data, setData] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const dropDownItems = ["Business", "Health", "Sports", "Entertainment", "Science", "Technology"]

    const toggleDropdown = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleItemClick = (item: string) => {
        console.log('Selected item:', item);
        setSearchTerm(item);
        getAllNewsBySearch(item.toLowerCase())
        setIsMenuOpen(false); // Close the dropdown after selecting an item
    };

    const getAllNewsBySearch = async (item: string) => {
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
        <div className='all-news-container'>
            <div className='dropdown'>
                <span>
                    <button onClick={toggleDropdown} className="dropdown-toggle">
                        Category
                    </button>
                    {isMenuOpen ? <BsChevronUp className="dropdown-icon" /> : <BsChevronDown className="dropdown-icon" />}
                </span>
                <span>{searchTerm}</span>
                {isMenuOpen && (
                    <ul className="dropdown-menu">
                        {dropDownItems.map((item, index) => (
                            <li key={index} className="dropdown-item" onClick={() => handleItemClick(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {data?.map((each, idx) => {
                const { author, url, urlToImage, publishedAt, title, description, source } = each;
                const { name } = source;
                return (
                    <div key={idx} className='card-container'>
                        {author !== null && title !== "[Removed]" && <Card author={author}
                            url={url}
                            image={urlToImage}
                            publishedAt={publishedAt}
                            title={title}
                            description={description}
                            source={name} />}
                    </div>
                )
            })}
        </div>
    )
}

export default AllNews