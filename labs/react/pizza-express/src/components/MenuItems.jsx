import React, { Component } from 'react'

class MenuItems extends Component {
    render() {
        return(
            <div className="menu-item">
                <img src={this.props.image} alt={this.props.name} />
                <div className="menu-description">
                    {this.props.name}
                    <div className="menu-item-name">
                    </div>
                    <div><strong>Price: {this.props.price}</strong></div>
                    <div>{this.props.description}</div>
                </div>
            </div>
        )

    }
}

export default MenuItems