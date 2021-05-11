import React from "react"
import { Navbar,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/icon.png'

const style ={
  color: "white"
}

export default class HeadNavbar extends React.Component{
   render() {
     return(
        <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">
        <img
          src={logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={style} href="/">Home</Nav.Link>
            <Nav.Link style={style} href="products">Products</Nav.Link>

          </Nav>

          </Navbar.Collapse>
        </Navbar>
     )

     }
}


