import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const DishDetail = (props) => {

    if (props.dish == null) {
        return <div/>
    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-12 col-md-5 m-1">

                    {renderDishDetail(props.dish)}
                </div>
                <div className="col-xs-12 col-sm-12 col-12 col-md-5 m-1">

                    {renderComments(props.dish.comments)}
                </div>
            </div>
        </div>
    );

};

const renderDishDetail = (dish) => {
    if (dish != null) {
        return (
            <div>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>

                        <CardTitle>{dish.name} </CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );

    }
    return <div/>
};

const renderComments = (comments) => {
    if (comments == null) {
        return <div/>
    }
    return (
        <div>
            <ul className="list-unstyled">
                <h4>Comments</h4>
                {comments.map((comment, key) => {
                    return (
                        <li key={key}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author}</p>
                        </li>

                    );
                })
                }
            </ul>
        </div>
    );
};
export default DishDetail;
