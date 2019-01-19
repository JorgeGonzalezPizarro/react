import React, { Component } from 'react';

import  Header  from './Header/Header';
import  { connect }  from 'react-redux';
import Menu from "./Functional components/MenuComponent";
import Footer from "./Footer/Footer";
import {Switch, Route, Redirect,  withRouter} from "react-router-dom";
import Home from "./Home/Home";
import {RenderDish} from "./Functional components/DishDetail/DishDetailRouter";
import Contact from "./Pages/Contact";
import About from "./Pages/AboutUs";

import { addComments } from '../redux/ActionCreators/Comments/ActionCreators';


export const mapStateToProps = (state) => {
    return {dishes: state.dishes, comments: state.comments, promotions: state.promotions, leaders: state.leaders}
};
export const mapDispatchToProps = (dispatch) => ({
   addComment : (dishId,rating,author,comment) => dispatch(addComments(dishId,rating,author,comment))
});



export  const Main = (props) =>   {
const HomePage = () => {
            return (
                <Home
                    dish ={props.dishes.filter((dishFeatured) => dishFeatured.featured)[0]}
                    promotion = {props.promotions.filter((promotionFeatured) => promotionFeatured.featured)[0]}
                    leaders = { props.leaders.filter((leadersFeatured) => leadersFeatured.featured)[0]}
                />  ) };


    const DishDetailRouter= ({match, addComment}) => {
        return (

                 <RenderDish  dish={ props.dishes.filter((dish , key) =>  dish.id === parseInt(match.params.id) )[0]} addComment={addComment}
                                   comments={props.comments.filter((comments ) => comments.dishId === parseInt(match.params.id))}/>
        )};



    return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path={["/","/home"]} component = {HomePage}
                           dish ={props.dishes.filter((dishFeatured) => dishFeatured.featured)[0]}
                           promotion = {props.promotions.filter((promotionFeatured) => promotionFeatured.featured)[0]}
                           leaders = { props.promotions.filter((leadersFeatured) => leadersFeatured.featured)[0]
                    }/>
                    <Route exact path={"/menu/:id"} component = { ({match}) => <DishDetailRouter match={match}  addComment={props.addComment }/>} />

                    <Route exact path={"/menu"} component = { () =><Menu dishes={props.dishes}/>} />
                    <Route exact path={"/aboutUs"} component = { () =><About leaders={props.leaders} />} />
                    <Route exact path={'/contactus'} component={Contact} />} />

                    <Redirect to={"/home"} />
                </Switch>

                <Footer/>

            </div>
        );

       };


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));

