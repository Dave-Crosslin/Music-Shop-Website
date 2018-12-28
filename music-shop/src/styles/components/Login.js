import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Login.css';

class Login extends Component {
  render() {
    return (
        <form>
        <FormGroup
          controlId="formBasicText"
          //validationState={}
        >
          <ControlLabel>Log In!</ControlLabel>
          <FormControl
            type="text"
            //value={}
            placeholder="Enter Username or Email"
            //onChange={}
          />
          <FormControl
            type="text"
            //value={}
            placeholder="Enter Password"
            //onChange={}
          />
          <FormControl.Feedback />
          <HelpBlock>Don't have an account?</HelpBlock>
            <Button className="button">Sign Up!</Button>
        </FormGroup>
      </form>
    );
  }
}

export default Login;
