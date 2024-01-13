import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import '../components/css_files/TopNavBar.css';

function TopNavBar() {
  return (
    <Navbar fixed='top' expand="lg" className="bg-dark text-white"> {/* Added text-white class here */}
      <Container fluid>
        <Navbar.Brand href="#" className="text-white">Navbar scroll</Navbar.Brand> {/* Ensure the brand is also white */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '6.25rem' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white">Home</Nav.Link> {/* Text white class added */}
            <Nav.Link href="#action2" className="text-white">About</Nav.Link> {/* Text white class added */}
            <Nav.Link href="#" disabled className="text-white"> {/* Disabled links may not change color */}
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
