import React from 'react'

import "./card.css";

type CardProps = {
    author: string;
    url: string;
    image: string;
    publishedAt: string;
    title: string;
    description: string;
    source: string;
}

const Card = ({ author, url, image, publishedAt, title, description, source }: CardProps) => {
    return (
        <div>
            <div className="card" style={{ width: "500px", display: 'flex', justifyContent: "between" }}>
                <img src={image} alt={title} style={{ width: "300px", height: "300px" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Author: {author}</p>
                    <p className="card-text">Published At: {publishedAt}</p>
                    <p className="card-text">Source: {source}</p>
                    <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Card