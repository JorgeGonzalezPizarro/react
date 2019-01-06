import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';



   const RenderMenuItem = ({dish,onClick}) => {
       return (
            <div className="col-12 col-md-5 m-1" >
                <Card key={dish.id}
                      onClick={() => onClick(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    };
    const Menu = (props) => {
        console.log(props);
        return (
            <div className="container">
                <div className="row">
                    {props.dishes.map((dish , key) => {
                 return ( <RenderMenuItem dish={dish} key={key} onClick = {props.onClick}/>)
                })}
                </div>
            </div> )
    };
export default Menu;


