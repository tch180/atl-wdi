import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx'
import SplashImage from './components/Splashimage.jsx'
import Description from './components/Description.jsx'
import MenuList from './components/MenuList.jsx'
import LocationList from './components/LocationList'
import Contacts from './components/Contacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SplashImage />
        <Description />
        <MenuList />
        <LocationList />
        <Contacts />
      </div>
    );
  }
}

export default App