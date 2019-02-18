import React, { Component } from 'react';
import './product_card.scss';
import { Link } from 'react-router-dom'

class ProductCard extends Component {
  render() {
    return (
        <Link to={"/product/" + this.props.link} className="product-wrapper">
            <div class="card">
                <img src={this.props.image} alt="Product Image" />
                <h1>{this.props.name}</h1>
                <p class="price">{this.props.price}</p>
            </div>
        </Link>
    );
  }
}

export default ProductCard;
