import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import './Login.css';

class Login extends Component {
  render() {
    return (
        <form>
        <FormGroup
          controlId="formBasicText"
          //validationState={}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            //value={}
            placeholder="Enter text"
            //onChange={}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

export default Login;
