import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import './Menu.css';

class Menu extends Component {

  render() {
    return (
      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Music-Shop!</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavDropdown eventKey={1} title="Guitars" href="#">
          <MenuItem eventKey={1.1}>Electric</MenuItem>
          <MenuItem eventKey={1.2}>Acoustic</MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={2} title="Basses" href="#">
          <MenuItem eventKey={2.1}>Electric</MenuItem>
          <MenuItem eventKey={2.2}>Acoustic</MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={3} title="Drums" href="#">
          <MenuItem eventKey={3.1}>Electric</MenuItem>
          <MenuItem eventKey={3.2}>Acoustic</MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={4} title="Amplifiers" pullRight="true">
          <MenuItem eventKey={4.1}>Tube</MenuItem>
          <MenuItem eventKey={4.2}>Solid State</MenuItem>
          <MenuItem eventKey={4.3}>Direct In</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
    );
  }
}

export default Menu;
