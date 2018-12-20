import React, { Component } from 'react';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';

class BottomNav extends Component {
  render() {
    return (
      <div className="bottomNav">
        <Nav bsStyle="pills" activeKey={1}>
         <NavItem eventKey={1} href="/home">
          NavItem 1 content
         </NavItem>
         <NavItem eventKey={2} title="Item">
          NavItem 2 content
         </NavItem>
         <NavItem eventKey={3} disabled>
          NavItem 3 content
         </NavItem>
        </Nav>
      </div>
    );
  }
}

export default BottomNav;