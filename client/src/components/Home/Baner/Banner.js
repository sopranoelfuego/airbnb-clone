import React,{useState} from 'react'
import "./banner.css"
import {Button} from "@material-ui/core"
import Search from "./search/Search"
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import {useHistory} from "react-router-dom"

const Banner = () => {
    const [showCalendar,setShowCalendar]=useState(false)
    const history=useHistory()
    return (
        <div className="banner">
            <div className="search__button__container">
                {showCalendar && <Search/>}
                <Button className="search__button" variant="outlined" onClick={(e)=>setShowCalendar(!showCalendar)}>
                     <div className="text">
                     {showCalendar ? "hide date picker":"show date picker"}
                         </div>     
                 <CalendarTodayIcon/>
                </Button>
            </div>
             <div className="banner__info">
                    <h1>Get out and stretch 
                        your imagination</h1>
                    <h5>plan a diffrent kind of gateway to
                        uncover the hidden gems near you
                    </h5>
                    <Button variant="outlined" onClick={()=>history.push('/SearchPage')}>explore your nearby</Button>
             </div>


        </div>
    )
}

export default Banner
