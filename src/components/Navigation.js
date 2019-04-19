import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, NavDropdown, Nav, Dropdown } from "react-bootstrap";
 
class Navigation  extends Component {render(){ 
			
    return (
				<Navbar bg="light" expand="lg">
				  <Navbar.Brand href="#home">Face To Face UAE</Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
					  <Nav.Link href="home">Home</Nav.Link>
					  <Nav.Link href="profile">Profile</Nav.Link>
					</Nav>
				  </Navbar.Collapse>
				</Navbar>
		   );
}}

export default Navigation;