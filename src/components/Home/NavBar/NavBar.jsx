import React from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Navbar from "react-bootstrap/Navbar";

import  img1 from '../../../assets/nav/Union 1.png'

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container fluid className="ms-5 me-5">
          <Navbar.Brand href="#"><span className='text-success'>ATG.</span>W<img src={img1} alt="" />RLD</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            
            <Form className="d-flex mx-auto">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          <p>Create account.<span className='text-primary'>It's free!</span></p>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;