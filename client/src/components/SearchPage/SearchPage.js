import React from 'react'
import "./SearchPage.css"
import {Button} from "@material-ui/core"
import SeachResult from "./SearchResult/SearchResult"
/*

  img,
        location,
        title,
        description,
        stars,
        price,
        total


*/
const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>
                    64 stays.from 20 august to 33 september.2guest
                </p>
                <h1>Stay nearby</h1>
                <Button variant="outlined">
                    cancellation flexibility
                </Button>
                <Button variant="outlined">
                    type of place
                </Button>
                
                <Button variant="outlined">
                   price
                </Button>
                <Button variant="outlined">
                  rooms and bed
                </Button>
                <Button variant="outlined">
                  more filters
                </Button>


            </div>
            <SeachResult
            
            
            img="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            location="kanyosha "
            title="nyabugete yemewe"
            description="2guest . 1bed . 1 bathroom . wifi;"
            stars={2.5}
            price="USD 300/night"
            total="10"
            />

            
        </div>
    )
}

export default SearchPage
