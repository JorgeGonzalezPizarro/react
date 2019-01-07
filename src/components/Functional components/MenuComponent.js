import React from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import {Link} from "react-router-dom";


const RenderMenuItem = ({dish,onClick}) => {
       return (
            <div className="col-12 col-md-5 m-1" >
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </div>
        );
    };
    const Menu = (props) => {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                    {props.dishes.map((dish , key) =>  <RenderMenuItem dish={dish} key={key} onClick = {props.onClick}/>)}
                </div>
            </div> )
    };
export default Menu;


