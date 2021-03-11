import React from 'react'
import "./banner.css"
import {Button} from "@material-ui/core"

const Banner = () => {
    return (
        <div className="banner">
             <div className="banner__info">
             <h1>Get out and stretch 
                 your imagination</h1>
             <h5>plan a diffrent kind of gateway to
                 uncover the hidden gems near you
             </h5>
             <Button variant="outlined">explore your nearby</Button>
             </div>
        </div>
    )
}

export default Banner
