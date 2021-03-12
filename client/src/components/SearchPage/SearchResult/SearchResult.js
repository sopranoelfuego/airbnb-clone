import React from 'react'
import {FavoriteBorder,Star} from "@material-ui/icons"
import "./SearchResult.css"
const SearchResult = (
    {
        img,
        location,
        title,
        description,
        stars,
        price,
        total
    }
) => {
    return (
        <div className="searchResult">
           <img src={img} alt="" className="searchResult__img"/>
           
           <div className="searchResult__info">
                    <div className="searchResult__info__top">
                            <p>{location}</p>
                            <h3>{title}</h3>
                            <p>___</p>
                            <p>{description}</p>

                    </div>

                    <div className="searchResult__info__bottom">
                            <div className="searchResult__info__bottom__starIconContainer">
                                    <Star className="searchResult__info__bottom__starIcon"/>
                                    <strong><p>{stars}</p></strong>
                            </div>
                            <div className="searchResult__info__bottom__priceContainer">

                                <strong><p>{price}</p></strong>
                                <strong><p>{total}</p></strong>
                            </div>
                    </div>
                    


           </div>
           <div><FavoriteBorder /></div>
        </div>
    )
}

export default SearchResult
