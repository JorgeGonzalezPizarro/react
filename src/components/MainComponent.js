import React, { Component } from 'react';
import { COMMENTS } from '../shared/Comments';
import { LEADERS } from '../shared/Leaders';
import { PROMOTIONS } from '../shared/Promotions';
import { DISHES } from '../shared/dishes';
import  Header  from './Header/Header';

import DishDetail from './Functional components/DishDetail/DishdetailComponent'
import Menu from "./Functional components/MenuComponent";
import Footer from "./Footer/Footer";
import {Switch , Route , Redirect} from "react-router-dom";
import Home from "./Home/Home";
import DishDetailRouter from "./Functional components/DishDetail/DishDetailRouter";
import Contact from "./Pages/Contact";

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes : DISHES,
            selectedDish: null,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS        }
    }

    onDishSelect = (dish) =>  {
        return this.setState({ selectedDish: dish});
    };



    render() {
        const HomePage = () => {
            return (
                <Home
                    dish ={this.state.dishes.filter((dishFeatured) => dishFeatured.featured)[0]}
                    promotion = {this.state.promotions.filter((promotionFeatured) => promotionFeatured.featured)[0]}
                    leaders = { this.state.leaders.filter((leadersFeatured) => leadersFeatured.featured)[0]}
                />  ) };
        return (
            <div>
                <Header/>

                <Switch>
                    <Route exact path={["/","/home"]} component = {HomePage}
                           dish ={this.state.dishes.filter((dishFeatured) => dishFeatured.featured)[0]}
                           promotion = {this.state.promotions.filter((promotionFeatured) => promotionFeatured.featured)[0]}
                           leaders = { this.state.promotions.filter((leadersFeatured) => leadersFeatured.featured)[0]
                    }/>
                    <Route exact path={"/menu"} component = { () =>{
                    return <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                    }} />
                    <Route exact path='/contactus' component={Contact} />} />

                    {/*<Route exact path={"/dish/:id"} component = { () =>  <DishDetailRouter  /> }/>*/}
                    <Redirect to={"/home"} />
                </Switch>

                <Footer/>

            </div>
        );
    }
}


