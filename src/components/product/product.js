import React, { Component } from 'react';
import './product.scss';
import VerticalCarousel from '../vertical-carousel/vertical-carousel';
import axios from 'axios';
import _ from 'lodash';
import { addToCart } from '../../actions/cart'

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

          this.product_id = this.props.match.params

        this.getProduct = this.getProduct.bind(this);
      }

      componentDidMount() {
          this.getProduct();
      }

      componentDidUpdate() {

      }


      getProduct() {
        const { product } = this.props.match.params
        let sizes = []
        let colors = []

        let url = `${process.env.REACT_APP_API}/api/v1/products/${product}`

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

    getCurrentVariant() {
        let variant;
        let url = `${process.env.REACT_APP_API}/api/v1/variants`

        let config = {
            headers: {
              size: document.getElementById("sizes").value,
              color: document.getElementById("colors").value,
              product_id: this.state.product.id
            }
          }

        console.log(config.headers);

        axios.get(url, config).then(response => {
            return response.data;
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
                        <select id="colors">
                            {_.uniq(this.state.colors).map(color =>
                                <option value={color}>{color}</option>
                            )}
                        </select>
                    </div>
                    <div className="product-sizes select" >
                        <h3>Sizes</h3>
                        <select id="sizes">
                            {_.uniq(this.state.sizes).map(size =>
                                <option value={size}>{size}</option>
                            )}
                        </select>
                    </div>
                    <div className="checkout">
                        <button className="btn btn-primary" disabled>Add to wishlist</button>
                        <button className="btn btn-primary" id="addToCart" onClick={this.getCurrentVariant.bind(this)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Product;
