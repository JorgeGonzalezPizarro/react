import React, { Component } from 'react';

import  Header  from './Header/Header';
import  { connect }  from 'react-redux';
import Menu from "./Functional components/MenuComponent";
import Footer from "./Footer/Footer";
import {Switch, Route, Redirect,  withRouter} from "react-router-dom";
import Home from "./Home/Home";
import DishDetailRouter from "./Functional components/DishDetail/DishDetailRouter";
import Contact from "./Pages/Contact";
import About from "./Pages/AboutUs";



export const mapStateToProps = (state) => {
    return {dishes: state.dishes, comments: state.comments, promotions: state.promotions, leaders: state.leaders}
};

export  const Main = (props) =>   {
console.log(props);
const HomePage = () => {
            return (
                <Home
                    dish ={props.dishes.filter((dishFeatured) => dishFeatured.featured)[0]}
                    promotion = {props.promotions.filter((promotionFeatured) => promotionFeatured.featured)[0]}
                    leaders = { props.leaders.filter((leadersFeatured) => leadersFeatured.featured)[0]}
                />  ) };




    return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path={["/","/home"]} component = {HomePage}
                           dish ={props.dishes.filter((dishFeatured) => dishFeatured.featured)[0]}
                           promotion = {props.promotions.filter((promotionFeatured) => promotionFeatured.featured)[0]}
                           leaders = { props.promotions.filter((leadersFeatured) => leadersFeatured.featured)[0]
                    }/>
                    <Route exact path={"/menu/:id"} component = { DishDetailRouter}/>

                    <Route exact path={"/menu"} component = { () =><Menu dishes={props.dishes}/>} />
                    <Route exact path={"/aboutUs"} component = { () =><About leaders={props.leaders} />} />
                    <Route exact path={'/contactus'} component={Contact} />} />

                    <Redirect to={"/home"} />
                </Switch>

                <Footer/>

            </div>
        );

    }

export default withRouter(connect(mapStateToProps)(Main));

