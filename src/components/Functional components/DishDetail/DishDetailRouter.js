import React , {Component} from 'react'
import DishDetail from "./DishdetailComponent";
import {DISHES} from '../../../shared/dishes'
import {COMMENTS} from "../../../shared/Comments";



 const DishDetailRouter= ({match, addComment}) => {
     return (

             renderMatch({...match.params, addComment})

         )
     };

const renderMatch = ({id,addComment}) => {
    if (id == null) {
        return <div/>
    }
    return <DishDetail dish={DISHES.filter((selectedDish) =>selectedDish.id === parseInt(id))[0]} comments = {COMMENTS.filter((comment) => comment.dishId === parseInt(id))} addComment={addComment}/>
};


export default DishDetailRouter
