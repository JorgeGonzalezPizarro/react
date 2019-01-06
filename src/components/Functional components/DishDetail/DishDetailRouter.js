import React , {Component} from 'react'
import DishDetail from "./DishdetailComponent";
import {DISHES} from '../../../shared/dishes'



 const DishDetailRouter= (props) => {
        console.log(props);
         return (
             renderMatch(props.match.params)

         )
     };

const renderMatch = (id) => {
    if (id == null) {
        return <div></div>
    }
    return <DishDetail dish={DISHES.filter((selectedDish) => selectedDish === this.state.selectedDish)[0]}/>
}


export default DishDetailRouter
