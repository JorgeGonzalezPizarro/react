import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, BreadcrumbItem, Breadcrumb
} from 'reactstrap';

const LeaderDetail = ({leader}) => {

    return (

        <div className="container">
            <div className="row">
                <RenderLeader leader={leader}/>
            </div>
        </div>
    );

};

const RenderLeader = ({leader}) => {
    if (leader != null) {
        return (
            <div>
                <Card>
                    <CardImg width="30px" src={leader.image} alt={leader.name}/>
                    <CardBody>

                        <CardTitle>{leader.name} </CardTitle>
                        <CardText>{leader.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );

    }
    return <div/>

};
export default LeaderDetail;

