import Nav from 'react-bootstrap/Nav';
import React from 'react';

const NavBar = () => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            AI Assistant
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavBar;
