import React, { Component } from 'react';
import './product_card.scss';
import { Link } from 'react-router-dom'

class ProductCard extends Component {
  render() {
    return (
        <Link to={"/product/" + this.props.link} className="product-wrapper">
            <div className="card">
                <img src={this.props.image} alt="Product" />
                <h1>{this.props.name}</h1>
                <p className="price">${this.props.price}</p>
            </div>
        </Link>
    );
  }
}

export default ProductCard;
