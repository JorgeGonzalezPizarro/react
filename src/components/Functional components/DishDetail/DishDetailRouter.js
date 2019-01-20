import React  from 'react'
import DishDetail from "./DishdetailComponent";





export const RenderDish = ({dish,comments,actions}) => {

    return <DishDetail dish={dish} comments = {comments} actions={actions} />
};


