import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "./Carousel.css";

function Carousel() {
  return (
    <MDBCarousel
      className="rounded-5 shadow-4-strong"
      // showIndicators
      showControls
      delay={1000}
    >
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://ik.imagekit.io/pinkwalrus/tr:w-1000,h-310/CoffeeShop_banner-01_yBskzU_XU_.png"
        alt="..."
      >
        <div className="banner">
          <div className="banner-content">
            <span>NEW ARRIVALS</span>
            <h1>HOLIDAY BLENDS</h1>
            <a href="#" className="btn-1">
              DISCOVER
            </a>
            <a href="#" className="btn-2">
              BUY NOW
            </a>
          </div>
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://ik.imagekit.io/pinkwalrus/tr:w-1000,h-310/AdobeStock_198268240_hGvFJcs0b.jpeg"
        alt="..."
      >
        <div className="banner">
          <div className="banner-content">
            <span>EXCLUSIVE CONTENT</span>
            <h1>COFFEE EVENT</h1>
            <a href="#" className="btn-2">
              DISCOVER
            </a>
          </div>
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://ik.imagekit.io/pinkwalrus/tr:w-1000,h-310/AdobeStock_210272915_6LvzYyVHH.jpeg"
        alt="..."
      >
        <div className="banner">
          <div className="banner-content">
            <span>ENTER TO WIN</span>
            <h1>FREE COFFEE</h1>
            <a href="#" className="btn-1">
              ENTER NOW
            </a>
          </div>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

export default Carousel;
