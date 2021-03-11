import React from 'react'
import Header from "./components/Home/Header/Header"
import Home from "./components/Home/Home"
import {Switch,Route} from "react-router-dom"
import Footer from "./components/footer/Footer"

export default function App() {
  return (
    <div>
        {/* HOMEPAGE */}
              {/* Header */}
              <Header/>
              <Home/>
              {/* Banner */} 
                    {/* Search */}
              {/* Cards */}
              <Footer />
              {/* Footer */}

        {/* ENDS OF HOME PAGE */}
        {/* Searching Page */}
    </div>
  )
}
