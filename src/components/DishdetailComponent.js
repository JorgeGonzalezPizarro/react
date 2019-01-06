import React, {Component} from 'react';
import {
    Card, CardImg, CardText,CardBody,
    CardTitle
} from 'reactstrap';

export default class DishDetail extends Component {

    renderDishDetail = (dish) => {
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

    renderComments = (comments) => {
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


    render() {
        if (this.props.dish == null) {
            return <div></div>
        }
            return (
                <div className="container">
                    <div className="row">
                    <div className="col-xs-12 col-sm-12 col-12 col-md-5 m-1">
                        {this.renderDishDetail(this.props.dish)}
                    </div>
                        <div className="col-xs-12 col-sm-12 col-12 col-md-5 m-1">

                        {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
            );

    }
}


