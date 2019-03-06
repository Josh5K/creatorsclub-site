import React, { Component } from 'react';
import './vertical-carousel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class VerticalCarousel extends Component {

    constructor(props) {
        super(props)

    }

  render() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        lazyLoad: false,
        centerMode: false,
        adaptiveHeight: false,
        swipeToSlide: true,
        verticalSwiping: true
      };

    return (
        <Slider {...settings}>
                {this.props.variants.map(variant =>
                    <div className="item">
                        <img onClick={() => document.getElementById("main-image").src = variant.image} src={variant.image} />
                    </div>
                )}
        </Slider>
    );
  }
}

export default VerticalCarousel;
