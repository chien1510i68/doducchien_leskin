import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    
    function Banner(props) {
        return (
            <div>
                 <Slider {...settings}>
                        <div class="slider_image w-full px-0 ">
                            <img className="w-full" src="https://leskin.com.vn/Uploads/images/banner.webp?v10" alt="" />
                        </div>
                        <div class="slider_image w-full">
                            <img className="w-full" src="https://leskin.com.vn/Uploads/Slider/slide1.webp?v10" alt="" />
                        </div>
                        <div class="slider_image w-full">
                            <img className="w-full" src="https://leskin.com.vn/Uploads/Slider/slide4.webp?v10" alt="" />
                        </div>
                </Slider>
        </div>
        );
    }
    
  export default Banner