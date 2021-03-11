
import React,{useState} from 'react'
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import "./Search.css"
import {People} from "@material-ui/icons"
import {Button} from "@material-ui/core"
import {DateRangePicker} from "react-date-range"
const Search = () => {
    const[startDate,setStartDate]=useState(new Date())
    const[endDate,setEndDate]=useState(new Date())
    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:"selection"
    }
    const handleSelection=(ranges)=>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)

    }
    return (
        <div className="search">
            <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelection}
            />
            <div className="searching__number__header">
                <h4>number of guest</h4>
                <People/>
            </div>
            <div className="searching__input__container">
               <input type="number" defaultValue="2"/>
            </div>
             <div className="button__Search__container">
               <Button variant="outlined">search</Button>
            
             </div>
        </div>
    )
}

export default Search
