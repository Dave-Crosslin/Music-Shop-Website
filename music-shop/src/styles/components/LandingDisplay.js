import React, { Component } from 'react';
import './LandingDisplay.css';
import { Carousel } from 'react-bootstrap';

class LandingDisplay extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://via.placeholder.com/100x100" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
             </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://via.placeholder.com/100x100" />
             <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </Carousel.Caption>
         </Carousel.Item>
        <Carousel.Item>
           <img width={900} height={500} alt="900x500" src="https://via.placeholder.com/100x100" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
        </Carousel.Item>
     </Carousel>
    );
  }
}

export default LandingDisplay;