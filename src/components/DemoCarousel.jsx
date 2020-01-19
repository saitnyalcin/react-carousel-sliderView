import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CitadelHill from '../images/citadelHill.jpg';
import HalifaxTown from '../images/halifaxTown.jpg';
import LightHouse from '../images/lightHouse.jpg';

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={CitadelHill} />
          <p className="legend">Citadel Hill NS</p>
        </div>
        <div>
          <img src={HalifaxTown} />
          <p className="legend">Halifax Town NS</p>
        </div>
        <div>
          <img src={LightHouse} />
          <p className="legend">Light House NS</p>
        </div>
      </Carousel>
    );
  }
}
export default DemoCarousel;
