import React, { Component } from 'react'
import PizzaOven from '../images/pizzaoven.jpg'

class Description extends Component {
    render() {
        return(
            <div id="description"className="description">
                <img src={PizzaOven} alt="pizza oven"/>
                <p>These are the voyages of the Starship Enterprise. Its continuing mission, to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no one has gone before. We need to neutralize the homing signal. Each unit has total environmental control, gravity, temperature, atmosphere, light, in a protective field. Sensors show energy readings in your area. We had a forced chamber explosion in the resonator coil. Field strength has increased by 3,000 percent. </p>
            </div>
        )
    }
}
export default Description