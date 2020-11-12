import React, {useEffect, useState} from 'react';
import app from "./fire";
import {Container, Row} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Video from './Video';

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
                <Container fluid >
                  <div className="category">
                    <div style={{marginLeft: "15px"}}>
                      <h5>New Songs</h5>
                      <Row >
                        { users.map((user) => {
                          return (
                              <Video user={user} cate={"New Song"} /> 
                          );
                          }) }
                      </Row>
                    </div>
                  </div>

                  <h5>Religious</h5>
                  <Row>
                    { users.map((user) => {
                      return (
                          <Video user={user} cate={"Religious"} />  
                      );
                      }) }
                  </Row>

                  <div className="category">
                    <div style={{marginLeft: "15px"}}>
                      <h5>Old is Gold</h5>
                      <Row >
                        { users.map((user) => {
                          return (
                              <Video user={user} cate={"Old Is Gold"} /> 
                          );
                          }) }
                      </Row>
                    </div>
                  </div>

                  <h5>Instrumental</h5>
                  <Row>
                    { users.map((user) => {
                      return (
                          <Video user={user} cate={"Instrumental"} />  
                      );
                      }) }
                  </Row>

                  <div className="category">
                    <div style={{marginLeft: "15px"}}>
                      <h5>Sad Songs</h5>
                      <Row >
                        { users.map((user) => {
                          return (
                              <Video user={user} cate={"Sad"} /> 
                          );
                          }) }
                      </Row>
                    </div>
                  </div>

                  <h5>Rap</h5>
                  <Row>
                    { users.map((user) => {
                      return (
                          <Video user={user} cate={"Rap"} />  
                      );
                      }) }
                  </Row>

                  <div className="category">
                    <div style={{marginLeft: "15px"}}>
                      <h5>Others</h5>
                      <Row >
                        { users.map((user) => {
                          return (
                              <Video user={user} cate={"Other"} /> 
                          );
                          }) }
                      </Row>
                    </div>
                  </div>

                </Container>
              </div>
        </>
    );
};

export default Allvideo;