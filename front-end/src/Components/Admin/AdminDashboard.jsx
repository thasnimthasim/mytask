import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function AdminDashboard() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="/student">Students</Nav.Link>
            <Nav.Link href="#">Reports</Nav.Link>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Change Password</NavDropdown.Item>
              <NavDropdown.Item href="#">Edit School Details</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#">Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default AdminDashboard;
