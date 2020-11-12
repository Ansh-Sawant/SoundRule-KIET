import React, {useEffect, useState} from 'react';
import app from "./fire";
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './Images/sound.jpeg';

const db = app.firestore();

const Allvideo = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        const usersCollection = await db.collection("users").get();
        setUsers(
          usersCollection.docs.map((doc) => {
            return doc.data();
          })
        );
      };
      fetchUsers();
    }, []); 
    
    return(
        <>
            <div style={{paddingTop: "60px", margin: "5px"}}>
                <h2>Videos</h2>
                <br />
                <Container fluid>
                  <Row>
                    { users.map((user) => {
                      return (
                          <Col md={3} key={user.videoname} >
                                <video width="320" height="180" src={user.avatar} controls />                                
                                <Row style={{marginBottom: "20px"}}>
                                  <Col xs={2} > <Image src={logo} width="40" height="40" alt="profile" roundedCircle /> </Col>
                                  <Col xs ><h5>{user.videoname}</h5>  {user.name} &nbsp;{user.category}</Col>
                                </Row>
                          </Col>  
                      );
                      }) }
                  </Row>
                </Container>
              </div>
        </>
    );
};

export default Allvideo;