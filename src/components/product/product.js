import React, { Component } from 'react';
import './product.scss';
import VerticalCarousel from '../vertical-carousel/vertical-carousel';
import axios from 'axios';
import _ from 'lodash';

class Product extends Component {

      constructor(props) {
          super(props);

          this.state = {
            product : "",
            variants: [],
            currentImage: "",
            price: "",
            colors: [],
            sizes: [],
          }

        this.getProduct = this.getProduct.bind(this);
        this.getOptions = this.getOptions.bind(this);
      }

      componentDidMount() {
          this.getProduct();
      }

      componentDidUpdate() {
        //this.getOptions();
      }

      getOptions() {
        this.state.variants.map(variant => {
            this.setState(prevState => ({
                colors: [this.options[0]],
                sizes: [this.options[1]]
              }))
        })
      }

      getProduct() {
        const { product } = this.props.match.params
        let sizes = []
        let colors = []

        let url = `${process.env.API}/api/v1/products/${product}`
        url = `http://localhost:3000/api/v1/products/${product}`

        axios.get(url).then(response => {

            response.data.product.variant.forEach(variant => {
                sizes.push(variant.size)
                colors.push(variant.color);
            });

            this.setState(prevState => ({
                            product: response.data.product,
                            variants: response.data.product.variant,
                            currentImage: response.data.product.variant[0].image,
                            price: response.data.product.variant[0].seller_price,
                            colors: colors,
                            sizes: sizes
                        }))

          this.currentImage = response.data.product.variant[0].image;
        });
      }

  render() {
    return (
        <div className="grid-container-p">
            <div className="vertical-carousel">
                <VerticalCarousel handler={this.setImage} variants={this.state.variants} />
            </div>
            <div className="product-image">
                <img id="main-image" src={this.state.currentImage} alt="Product" />
            </div>
            <div className="product-info">
                <h1>{this.state.product.name}</h1>
                <h2 className="price">${this.state.price}</h2>
                <p>
                    {this.state.product.description}
                </p>
                <div className="product-options" >
                    <div className="product-colors select">
                        <h3>Colors</h3>
                        <select>
                            {_.uniq(this.state.colors).map(color =>
                                <option value={color}>{color}</option>
                            )}
                        </select>
                    </div>
                    <div className="product-sizes select" >
                        <h3>Sizes</h3>
                        <select>
                            {_.uniq(this.state.sizes).map(size =>
                                <option value={size}>{size}</option>
                            )}
                        </select>
                    </div>
                    <div className="checkout">
                        <button className="btn btn-primary" disabled>Add to wishlist</button>
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Product;
