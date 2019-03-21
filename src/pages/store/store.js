import React, { Component } from 'react';
import './store.scss';
import Product from '../../components/product/product';
import ProductCard from '../../components/product_card/product_card';
import axios from 'axios';
import qs from 'qs'

class Store extends Component {

  constructor(props) {
    super(props)
    this.state = {
      seller: "",
      products: []
    }
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    const { seller } = this.props.match.params
    const search = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    })['search']

    console.log(search);
    if(search) {
      let url = `${process.env.REACT_APP_API}/api/v1/search/products?query=${search}`
      axios.get(url).then(response => {
        this.setState({ products: response.data.products })
      });
    }
    else if(seller) {
      let url = `${process.env.REACT_APP_API}/api/v1/sellers/${seller}`
      axios.get(url).then(response => {
        this.setState({seller: response.data.seller, products: response.data.products})
      });
    }
  }

  render() {
    return (
        <div className="grid-container">
          {this.state.products.map(product =>
            <ProductCard image={product.variant[0].image} name={product.name} price={product.variant[0].seller_price} link={product.id} />
          )};
        </div>
    );
  }
}

export default Store;
