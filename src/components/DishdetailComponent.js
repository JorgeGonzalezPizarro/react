import React, {Component} from 'react';
import {
    Card, CardImg, CardText,
    CardTitle
} from 'reactstrap';

export default class DishDetail extends Component {



    renderDishDetail = (dish) => {
        if (dish !== null) {
            return (

                <div>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardTitle>{dish.title} </CardTitle>
                    <CardText>{dish.description}</CardText>

                </div>

            );

        }
        return <div/>
    };

    renderComments = (comments) => {
        if (comments === null) {
            return <div/>
        }
        return (
            <div className="col-12 col-sm-12 col-md-5 m-1">
                <ul className="list-unstyled">
                    <h4>Comments</h4>
                    {comments.map((comment, key) => {
                        return (
                            <li key={key}>
                                <p>{comment.comment}</p>
                                <p>{comment.author}</p>
                            </li>

                        );
                    })
                    }
                </ul>
            </div>
        );
    };


    render() {
        console.log(this.props);

        return (
            <div className="col-12 col-sm-12 col-md-5 m-1">

            <div className="row">
                <div className="col-12 col-sm-12 col-md-5 m-1">
                    <Card>
                        {this.renderDishDetail(this.props.dish)}
                    </Card>
                </div>
                {this.renderComments(this.props.dish.comments)}
            </div>

            </div>
        );
    }
}


