import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import logo from './Images/sound.jpeg';

const Video = (props) => {

    return(
        <>
            { (props.user.category === props.cate) ?
                <Col md={3} key={props.user.videoname} >
                    <video width="320" height="180" src={props.user.avatar} poster={props.user.thumbnail} controls />                                
                    <Row style={{marginBottom: "20px"}}>
                        <Col xs={2} > <Image src={props.user.profilepic} width="40" height="40" alt="profile" roundedCircle /> </Col>
                        <Col xs ><h6>{props.user.videoname}</h6>  {props.user.name} <br /> Date: {props.user.dateadded} </Col>
                    </Row>
                </Col> : "" 
            }
        </>
    )
}

export default Video;