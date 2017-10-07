import React, { Component } from 'react';
import MenuItem from "./MenuItem"
import MenuData from "../pizzaData"



class MenuList extends Component {
    render(){
        const menuComponents = MenuData.map((menuItem)=> {
            return (
            <MenuItem  
                image ={menuItem.image}
                name ={menuItem.name}
                price={menuItem.price}
                description={menuItem.description}
            />
            )
        })
        return(
            <div>
                {menuComponents}
            </div>
        )
    }
}

export default MenuList;