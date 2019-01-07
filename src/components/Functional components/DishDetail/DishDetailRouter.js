import React , {Component} from 'react'
import DishDetail from "./DishdetailComponent";
import {DISHES} from '../../../shared/dishes'
import {COMMENTS} from "../../../shared/Comments";



 const DishDetailRouter= ({match}) => {
         return (
             renderMatch(match.params)

         )
     };

const renderMatch = ({id}) => {
    console.log("aa" , id);
    if (id == null) {
        return <div/>
    }
    return <DishDetail dish={DISHES.filter((selectedDish) =>selectedDish.id === parseInt(id))[0]} comments = {COMMENTS.filter((comment) => comment.dishId === parseInt(id))}/>
};


export default DishDetailRouter
