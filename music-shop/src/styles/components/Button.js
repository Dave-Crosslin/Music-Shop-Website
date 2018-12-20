import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Button.css';

class Btn extends Component {
  render() {
    return (
        <Button className="button" bsStyle="primary">Write!</Button>
    );
  }
}

export default Btn;
