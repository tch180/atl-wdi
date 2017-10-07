import React, { Component } from 'react'
import Location from './Location.jsx'
import locationData from '../locationData.js'

class LocationList extends Component {
    render(){
        const location = locationData.map((location, index) => {
            return <Location
            name={location.name}
            address={location.address}
            phone={location.phone}
             />
        })
        return (
            <div id="locations">
                <h1>Locations</h1>
                <div className="locations">
                    {location}
                </div>
            </div>
        )
    }
}

export default LocationList