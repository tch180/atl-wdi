import React, { Component } from 'react'
import Description from './Description'
import Location from './Location'
import Contact from './Contacts'
import MenuList from './MenuList'
import SplashImage from './SplashImage'

class Navbar extends Component {
    render(){
        return (
            <div className="navbar">
            <a href="#description"> Our Story</a>
            <a href="#menu">Menu</a>
            <h1>PIZZA-EXPRESS</h1>
            <a href="#locations">Locations</a>
            <a href="contact">Contact</a>
            </div>

        )
    }
}

export default Navbar