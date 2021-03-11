import React from 'react'
import Banner from "./Baner/Banner"
import Card from "./Card/Card"
import {CircularProgress} from "@material-ui/core"
import "./home.css"
const mapping=[
   {
        
       src:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
       ,
        title:"hotel de ville",
       description:"asjlahslkhalkshlahlskhalkshasjlahslkhalkshlahlskhalkshasjlahslkhalkshlahlskhalksh",
        price:"505"
    },
    {

        src:"https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1416&q=80"
        ,
         title:"hotel club du lac",
        description:"asjlahslkhalkshlahlskhalkshasjlahslkhalkshlahlskhalkshasjlahslkhalkshlahlskhalksh",
         price:"535"
     },
    {

        src:"https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
         title:"hotel club du lac",
        description:"asjlahslkhalkshlahlskhalkshasjlahslkhalkshlahlskhalkshasjlahslkhalkshlahlskhalksh",
         price:"535"
     },
    ]
const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="section_one" >
            {!mapping.length ? <CircularProgress />: (
               mapping.map( card =><Card card={card}/>
               )
            )}
          
            </div>
        </div>
    )
}

export default Home
