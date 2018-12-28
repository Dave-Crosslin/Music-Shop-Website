import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import './GridPage.css';

class GridPage extends Component {
    render() {
      return (
        <Grid>
         <Row>
          <Col xs={6} md={3}>
            <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
          <Col xs={6} md={3}>
             <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
          <Col xs={6} md={3}>
             <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
          <Col xs={6} md={3}>
             <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
         </Row>
         <Row>
          <Col xs={6} md={3}>
            <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
          <Col xs={6} md={3}>
             <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
          <Col xs={6} md={3}>
             <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
          <Col xs={6} md={3}>
             <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
         </Row>
         <Row>
          <Col xs={6} md={3}>
            <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
          <Col xs={6} md={3}>
             <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
          <Col xs={6} md={3}>
             <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
          <Col xs={6} md={3}>
             <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
         </Row>
         <Row>
          <Col xs={6} md={3}>
            <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
          <Col xs={6} md={3}>
             <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
          <Col xs={6} md={3}>
             <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
          <Col xs={6} md={3}>
             <Image src="https://via.placeholder.com/100x100" alt="" thumbnail />
          </Col>
         </Row>
       </Grid>
      );
    }
  }
  
  export default GridPage;