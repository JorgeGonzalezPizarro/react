import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Navbar, NavbarBrand
} from 'reactstrap';
import { DISHES } from '../shared/dishes';

import DishDetail from './DishdetailComponent'
import Menu from "./MenuComponent";

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes : DISHES,
            selectedDish: null
        }
    }


    onDishSelect = (dish) =>  {
        console.log(dish);
        return this.setState({ selectedDish: dish});
    };




    render() {
        return (
            <div>
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
                </Navbar>

                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
                <DishDetail dish={this.state.dishes.filter((selectedDish) => selectedDish === this.state.selectedDish)[0] } />
            </div>

        );
    }
}


