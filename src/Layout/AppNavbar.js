import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand href="#">Admin Panel</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#">Profile</Nav.Link>
          <Nav.Link href="#">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;


//  import React from 'react';
//  import { Navbar, Container, Nav } from 'react-bootstrap';

//  const AppNavbar = () => {
//    return (
//      <Navbar bg="light" expand="lg" className="shadow">
//        <Container>
//          <Navbar.Brand href="#">Admin Dashboard</Navbar.Brand>
//          <Nav className="ms-auto">
//            <Nav.Link href="#">Profile</Nav.Link>
//            <Nav.Link href="#">Logout</Nav.Link>
//          </Nav>
//        </Container>
//      </Navbar>
//    );
//  };

//  export default AppNavbar;