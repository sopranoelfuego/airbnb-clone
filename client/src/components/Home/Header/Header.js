import React from 'react'
import './header.css'
import {Avatar} from "@material-ui/core"
import {Search,Language,ExpandMore} from "@material-ui/icons"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <Link to="/"> 
                    <img
                    src="http://static.dezeen.com/uploads/2014/07/Airbnb-rebrand-by-DesignStudio_dezeen_468_8.jpg"
                    className="header__icon"/>
            </Link>
            <div className="header__center">
                <input />
                <Search/>

            </div>
            <div className="header__right">
                <h4>become a host</h4>
                <Language/>
                <ExpandMore/>
                <Avatar/>

                 
            </div>
            
            
        </div>
    )
}

export default Header
