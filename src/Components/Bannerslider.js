import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import slider1 from "../assets/slider1.jpg"
import slider2 from "../assets/slider2.jpg"

function Bannerslider() {
  const [userapi, setuserapi] = useState([]);
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="500px"
          src= {slider1}
          alt="First slide"
          fluid
        />
        {/* <Carousel.Caption>
          <h3>Generate Youtube Link</h3>
          <p>Generate and start Generater of your Money </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="500px"
          src={slider2}
          alt="Second slide"
          
        />
        {/* <Carousel.Caption>
          <h3>Generate Instagram Link</h3>
          <p>Generate and start Generater of your Money </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>

  );
}

export default Bannerslider;