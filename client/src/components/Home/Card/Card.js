import React from 'react'
import "./Card.css"

const Card = ({card}) => {
    const {src,title,description,price}=card
    return (
        <div className="card">
        <img src={src} alt={title} className="card__img__top"/>
            
            <div className="card__info">
                <h3>{title}</h3>
                <p>{description}</p>
                <h5>{price}</h5>
            </div>
        </div>
    )
}

export default Card
