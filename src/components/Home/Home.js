import React from 'react'
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {Loading} from "../Functional components/LoadingComponent";
const HomeComponent = (props) => {
    if(!props.dish)
    {
        return <Loading/>
    }
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leaders} />
                </div>
            </div>
        </div>
    );
};
const RenderCard = ({item}) => {
    console.log(item);
return (
    <Card>
        <CardImg src={item.image} alt={item.image}/>
        <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
            <CardText>{item.description}</CardText>

        </CardBody>
    </Card>


)



}

export default HomeComponent;