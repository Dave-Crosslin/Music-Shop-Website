import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
  
  
  render() {
    return (
      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
        <NavLink to="/">Music-Shop!</NavLink>
         
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavDropdown eventKey={1} title="Guitars" href="#">
          <MenuItem eventKey={1.1}><NavLink to="/grid">Electric</NavLink></MenuItem>
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
        <NavDropdown eventKey={4} title="Amplifiers">
          <MenuItem eventKey={4.1}>Tube</MenuItem>
          <MenuItem eventKey={4.2}>Solid State</MenuItem>
          <MenuItem eventKey={4.3}>Direct In</MenuItem>
        </NavDropdown>
        </Nav>
        <Nav pullRight>
        <Dropdown>
          <Dropdown.Toggle noCaret>
            <Glyphicon glyph="align-center" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
           <MenuItem eventKey="1">Sign In</MenuItem>
           <MenuItem eventKey="2">Contact</MenuItem>
           <MenuItem eventKey="3">About</MenuItem>
          </Dropdown.Menu>
         </Dropdown>
       </Nav>
      </Navbar>
    );
  }
}

export default Menu;
