import React, { Component } from 'react';
import './store.scss';
import Product from '../../components/product/product';
import ProductCard from '../../components/product_card/product_card';

class Store extends Component {
  render() {
    return (
        <div className="grid-container">
            <ProductCard image="https://creatorsclub.net/wp-content/uploads/2019/01/mockup-520c4b47.jpg" name="Alright. Unisex T-Shirt" price="$22.20" />
            <ProductCard image="https://creatorsclub.net/wp-content/uploads/2019/01/mockup-520c4b47.jpg" name="Alright. Unisex T-Shirt" price="$22.20" />
            <ProductCard image="https://creatorsclub.net/wp-content/uploads/2019/01/mockup-520c4b47.jpg" name="Alright. Unisex T-Shirt" price="$22.20" />
            <ProductCard image="https://creatorsclub.net/wp-content/uploads/2019/01/mockup-520c4b47.jpg" name="Alright. Unisex T-Shirt" price="$22.20" />
            <ProductCard image="https://creatorsclub.net/wp-content/uploads/2019/01/mockup-520c4b47.jpg" name="Alright. Unisex T-Shirt" price="$22.20" />
            <ProductCard image="https://creatorsclub.net/wp-content/uploads/2019/01/mockup-520c4b47.jpg" name="Alright. Unisex T-Shirt" price="$22.20" />
            <ProductCard image="https://creatorsclub.net/wp-content/uploads/2019/01/mockup-520c4b47.jpg" name="Alright. Unisex T-Shirt" price="$22.20" />
            <ProductCard image="https://creatorsclub.net/wp-content/uploads/2019/01/mockup-520c4b47.jpg" name="Alright. Unisex T-Shirt" price="$22.20" />
        </div>
    );
  }
}

export default Store;
