import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
      >
        <div>
        <img src="/images/image1.jpeg" />
          <div className="myCarousel">
            <h3 style={{marginTop: "3vh"}}>Tony Stark</h3>
            <h4>CEO (Stark Industries)</h4>
            <p>
                The technical equipments available here for the students are really awesome and updated. I often keep visiting this place for some of my technical works!
            </p>
          </div>
        </div>

        <div>
          <img src="/images/image2.jpeg" />
          <div className="myCarousel">
            <h3 style={{marginTop: "3vh"}}>Subhasis Chaudhuri</h3>
            <h4>Director (IIT Bombay)</h4>
            <p>
              It is one of the best PG for a student to resite and work. I highly recommend all the IITians to consider this place for stay during thier interns.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/image3.jpeg" />
          <div className="myCarousel">
            <h3 style={{marginTop: "3vh"}}>Narendra Modi</h3>
            <h4>Prime Minister (India)</h4>
            <p>
              This PG is one of the best PG in Bangalore with all the facilities available. Students should definitely stay here and work for an "AatmNirbhar Bharat" and keep the PG clean & hygienic  #SwachhBharat
            </p>
          </div>
        </div>
        
      </Carousel>
    );
  }
}