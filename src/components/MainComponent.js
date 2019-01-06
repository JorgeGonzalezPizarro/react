import React, { Component } from 'react';

import { DISHES } from '../shared/dishes';
import  Header  from './Header/Header';

import DishDetail from './Functional components/DishDetail/DishdetailComponent'
import Menu from "./Functional components/MenuComponent";
import Footer from "./Footer/Footer";
import {Switch , Route , Redirect} from "react-router-dom";
import Home from "./Home";
import DishDetailRouter from "./Functional components/DishDetail/DishDetailRouter";

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes : DISHES,
            selectedDish: null
        }
    }

    onDishSelect = (dish) =>  {
        return this.setState({ selectedDish: dish});
    };




    render() {
        return (
            <div>
                <Header/>

                <Switch>
                    <Route exact path={["/","/home"]} component = {Home}/>
                    <Route exact path={"/menu"} component = { () =>{
                    return <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                    }} />
                    {/*<Route exact path={"/dish/:id"} component = { () =>  <DishDetailRouter  /> }/>*/}
                    <Redirect to={"/home"} />
                </Switch>

                <Footer/>

            </div>
        );
    }
}


