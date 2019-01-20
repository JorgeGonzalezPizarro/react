import React, {Component} from 'react';

import Header from './Header/Header';
import {connect} from 'react-redux';
import Menu from "./Functional components/MenuComponent";
import Footer from "./Footer/Footer";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Home from "./Home/Home";
import {RenderDish} from "./Functional components/DishDetail/DishDetailRouter";
import Contact from "./Pages/Contact";
import About from "./Pages/AboutUs";

import {addComments, removeComment} from '../redux/ActionCreators/Comments/ActionCreators';
import {fetchDishes} from '../redux/ActionCreators/Dishes/ActionCreators';


export const mapStateToProps = (state) => {
    return {dishes: state.dishes, comments: state.comments, promotions: state.promotions, leaders: state.leaders}
};


export const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComments(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())
    },
    removeComment: (comment) => dispatch(removeComment(comment))
});


export class Main extends Component {
    constructor(props) {
        super(props);
        this.state= {
            dishes: props.dishes,
            ...props
        }
    }

    componentDidMount() {
        console.log("a" , this.props);
        return this.props.fetchDishes();
    }


    render() {
        const actions = {
            addComment: this.props.addComment,
            removeComment: this.props.removeComment
        }
        console.log("a2" , this.props);

        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dishFeatured) =>  dishFeatured.featured)[0]}
                    promotion={this.props.promotions.filter((promotionFeatured) => promotionFeatured.featured)[0]}
                    leaders={this.props.leaders.filter((leadersFeatured) => leadersFeatured.featured)[0]}
                />)
        };


        const DishDetailRouter = ({match, actions}) => {

            return (

                <RenderDish dish={this.props.dishes.dishes.filter((dish, key) => dish.id === parseInt(match.params.id))[0]}
                            actions={actions}
                            comments={this.props.comments.filter((comments) => comments.dishId === parseInt(match.params.id))}/>
            )
        };


        return (
            <div>
                <Header/>
                <Switch>
                    <Route  exact path={["/", "/home"]} component={HomePage}
                           dish={this.props.dishes.dishes.filter((dishFeatured) => dishFeatured.featured)[0]}
                           promotion={this.props.promotions.filter((promotionFeatured) => promotionFeatured.featured)[0]}
                           leaders={this.props.promotions.filter((leadersFeatured) => leadersFeatured.featured)[0]
                           }/>
                    <Route exact path={"/menu/:id"}
                           component={({match}) => <DishDetailRouter match={match} actions={actions}/>}/>

                    <Route exact path={"/menu"} component={() => <Menu dishes={this.props.dishes.dishes}/>}/>
                    <Route exact path={"/aboutUs"} component={() => <About leaders={this.props.leaders}/>}/>
                    <Route exact path={'/contactus'} component={Contact}/>} />

                    <Redirect to={"/home"}/>
                </Switch>

                <Footer/>

            </div>
        );

    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

