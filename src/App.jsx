import React from 'react';
import NavBar from './components/Home/NavBar/NavBar';
import Banner from './components/Home/Banner/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import BodyNav from './components/Home/BodyNav/BodyNav';
import LeftBody from './components/LeftBody/LeftBody';

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Container className="mt-2">
        <BodyNav></BodyNav>
        <Row className="gx-5">
          <Col lg={8}>
            <LeftBody></LeftBody>
          </Col>
          <Col lg={4}>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;