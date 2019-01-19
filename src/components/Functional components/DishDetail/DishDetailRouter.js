import React , {Component} from 'react'
import DishDetail from "./DishdetailComponent";





export const RenderDish = ({key,dish,comments,addComment}) => {
    return <DishDetail dish={dish} comments = {comments} addComment={addComment}/>
};


