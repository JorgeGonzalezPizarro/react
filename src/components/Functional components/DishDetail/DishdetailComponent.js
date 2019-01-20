import React , {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, BreadcrumbItem, Breadcrumb, Modal, ModalHeader, ModalBody, Row, Label, Col, Button
} from 'reactstrap';
import Link from "react-router-dom/es/Link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt , faTrash} from "@fortawesome/free-solid-svg-icons";
import {Control, Errors, LocalForm} from "react-redux-form";

const DishDetail = (props) => {
        console.log(props);
    return (

        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments}  actions={props.actions} dishId={props.dish.id} />
                </div>
                <div className="col-12 col-md-5 m-1">

                </div>

            </div>
        </div>
    );

};

const RenderDish = ({dish}) => {
    console.log(dish);

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


};

const RenderComments = ({comments ,actions , dishId }) => {
    const handleClick = (comment , e) =>
    {
        e.preventDefault();
        return actions.removeComment(comment.id)
    }
    return (
        <div>
            <ul className="list-unstyled">
                <h4>Comments</h4>
                {comments.map((comment, key) => {
                    return (
                        <div id={key}>
                        <li key={key}>
                            <p>{comment.comment}</p>
                            <span>--{comment.author}</span>
                            <button onClick={handleClick.bind(this,comment)}><FontAwesomeIcon icon={faTrash}/></button>

                        </li>

                        </div>


                    );
                })
                }
            </ul>
            <CommentForm isOpen={false} addComment={actions.addComments} dishId={dishId}/>

        </div>
    );
};




export class CommentForm extends Component {
    constructor (props)
    {
        super(props);
        this.state = {
            isOpen : this.props.isOpen,
        }
    }
    toggleModal = () => {

        return this.setState({
            ...this.state, isOpen: !this.state.isOpen
        });
    }


    render() {
        return (
                <>
                    <button onClick={this.toggleModal}>
                        <FontAwesomeIcon icon={faPencilAlt}/>
                        <p>Submit Comment</p>
                    </button>
                    <Modal isOpen={this.state.isOpen}>
                        <ModalHeader toggle={this.toggleModal}>Submit Content</ModalHeader>
                        <RenderForm addComment={this.props.addComment} dishId={this.props.dishId}/>
                        <ModalBody>

                        </ModalBody>
                    </Modal>
                </>
        );
    };

}


const RenderForm = ({dishId,addComment}) => {
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    const handleSubmit = (values) =>   addComment(dishId,values.rating,values.author,values.comment);

    return(
            <>
                <div className="col-12 col-md-9">

                    <LocalForm onSubmit={(values) => handleSubmit.bind(this,values)}>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={9}>Rating</Label>
                            <Col md={9}>
                                <Control.text type="number" model=".rating" id="rating" name="rating"
                                              placeholder="Rating" min="1"
                                              className="form-control"
                                              validators={{
                                                  required}}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".rating"
                                        show="touched"
                                        messages={{
                                            required: 'Required',

                                        }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={9}>Your Name</Label>
                            <Col md={9}>
                                <Control.text model=".author" id="author" name="author"
                                              placeholder="First Name"
                                              className="form-control"
                                              validators={{
                                                  required, minLength: minLength(3), maxLength: maxLength(15)
                                              }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={9}>Comment</Label>
                            <Col md={9}>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                                  placeholder="Comment"
                                                  className="form-control"
                                                  validators={{
                                                      required, maxLength: maxLength(500)
                                                  }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                />
                            </Col>
                        </Row>
                        <Button className="bg-primary">
                            Submit
                        </Button>
                    </LocalForm>

                </div>
            </>


    )

}

export default DishDetail;

