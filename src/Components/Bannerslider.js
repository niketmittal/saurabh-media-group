import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function Bannerslider() {
  const [userapi, setuserapi] = useState([]);
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.dainikbhaskargroup.com/images/slider/rajashthan-web-banner.jpg"
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
          src="https://www.dainikbhaskargroup.com/images/slider/rajashthan-web-banner.jpg"
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