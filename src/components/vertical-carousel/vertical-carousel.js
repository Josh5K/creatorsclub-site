import React, { Component } from 'react';
import './vertical-carousel.scss';

class VerticalCarousel extends Component {
  render() {
    return (
        <div class="carousel slide hero">
            <div class="carousel-inner">
                {this.props.variants.map(variant =>
                    <div class="item">
                        <img src={variant.image} />
                    </div>
                )}
            </div>
        </div>
    );
  }
}

export default VerticalCarousel;
