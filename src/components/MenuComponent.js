import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent'
class Menu extends Component {

    constructor(props) {
        super(props);
        const {dishes,onClick,dishSelected} = this.props;
        this.dishes = dishes;
        this.onClick = onClick;
        this.disheSelected = dishSelected;
    }



    render() {
        const menu =
            this.props.dishes.map((dish , key) => {
                return (
                    <div className="col-12 col-md-5 m-1" key={key}>
                        <Card key={dish.id}
                              onClick={() => this.onClick(dish)}>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                );
            });

        return (
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                </div>

        );
    }
}


export default Menu;