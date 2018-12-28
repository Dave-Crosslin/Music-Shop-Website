import React, { Component } from 'react';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import './BottomNav.css';   

class BottomNav extends Component {
  render() {
    return (
      <div className="bottomNav">
        <Nav activeKey={1}>
         <NavItem eventKey={1} href="/home">
          Questions or Concerns?
         </NavItem>
         <NavItem eventKey={2} title="Item">
          Meet our Team
         </NavItem>
         <NavItem eventKey={3} disabled>
          Employment opportunities
         </NavItem>
        </Nav>
      </div>
    );
  }
}

export default BottomNav;