import React, { Component } from 'react';
import './store.scss';
import Product from '../../components/product/product';
import ProductCard from '../../components/product_card/product_card';
import axios from 'axios';

class Store extends Component {

  constructor(props) {
    super(props)
    this.state = {
      seller: "",
      products: []
    }

    this.getProducts = this.getProducts.bind(this);
    this.getProducts();

  }

  getProducts() {
    let url = `${process.env.API}/api/v1/sellers`
    const { seller } = this.props.match.params
    url = `http://localhost:3000/api/v1/sellers/${seller}`
    axios.get(url).then(response => {
      this.setState({seller: response.data.seller})
      this.setState({products: response.data.products})
    });
  }

  render() {
    return (
        <div className="grid-container">
          {this.state.products.map(product =>
            <ProductCard image={product.variant[0].image} name={product.name} price={product.variant[0].seller_price} />
          )};
        </div>
    );
  }
}

export default Store;
