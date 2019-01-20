import React  from 'react'
import DishDetail from "./DishdetailComponent";





export const RenderDish = ({dish,comments,actions}) => {
    console.log(dish);
    return <DishDetail dish={dish} comments = {comments} actions={actions} />
};


