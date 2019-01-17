import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, BreadcrumbItem, Breadcrumb, Media
} from 'reactstrap';

const LeaderDetail = ({leader}) => {

    return (
            <RenderLeader leader={leader}/>
    );

};

const RenderLeader = ({leader}) => {
    if (leader != null) {
        return (
                <div className="container">
                    <div className="row">
                        <Media tag="li">
                            <Media left middle>
                                <Media object src={leader.image} alt={leader.name} />
                            </Media>
                            <Media body className="m-3">
                                <Media heading>{leader.name}</Media>
                                <p>{leader.designation}</p>
                                <p>{leader.description}}</p>
                            </Media>
                        </Media>
                    </div>
                    </div>
        );

    }
    return <div/>

};
export default LeaderDetail;

