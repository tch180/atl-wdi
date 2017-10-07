import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import SplashImage from "./components/SplashImage"
import Description from "./components/Description"
import Contacts from "./components/Contact"
import Location from "./components/Location"
import MenuList from "./components/MenuList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SplashImage />
        <Description />
        <MenuList />
        <Contacts />
        <Location/>
        <h1>Place your components in here!</h1>
      </div>
    );
  }
}

export default App;