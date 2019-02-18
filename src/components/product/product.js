import React, { Component } from 'react';
import './product.scss';
import VerticalCarousel from '../vertical-carousel/vertical-carousel';

class Product extends Component {
    state = {
        variants: [
          {
            image: "https://creatorsclub.net/wp-content/uploads/2019/01/mockup-520c4b47.jpg"
          },
          {
            image: "https://creatorsclub.net/wp-content/uploads/2019/01/mockup-520c4b47.jpg"
          },
          {
            image: "https://creatorsclub.net/wp-content/uploads/2019/01/mockup-520c4b47.jpg"
          },
          {
            image: "https://creatorsclub.net/wp-content/uploads/2019/01/mockup-520c4b47.jpg"
          }
        ]
      }
  render() {
    return (
        <div className="grid-container-p">
            <div className="vertical-carousel">
                <VerticalCarousel variants={this.state.variants} />
            </div>
            <div className="product-image">
                <img src="https://creatorsclub.net/wp-content/uploads/2019/01/mockup-520c4b47.jpg" alt="Product image" />
            </div>
            <div className="product-info">
                <h1>Alright. Unisex T-Shirt</h1>
                <h2 className="price">$25.50 USD</h2>
                <p>
                    This t-shirt is everything! That is it. Just buy it already. Aqua on a shirt! seriously. Also all purchases go to support AquaFPS. You can feel good helping this gremlin out.

                    • 100% combed and ring-spun cotton (heather colors contain polyester)
                    • Fabric weight: 4.2 oz (142 g/m2)
                    • Shoulder-to-shoulder taping
                    • Side-seamed

                    2-7 days production before shipping. Sizes are unisex so check the chart before buying.

                    The Male model is wearing a size M. He’s 6.2 feet (190 cm) tall, chest circumference 37.7″ (96 cm), waist circumference 33.4″ (85 cm).
                </p>
                <div className="product-options" >
                    <div className="product-colors select">
                        <h3>Colors</h3>
                        <select>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Orange">Orange</option>
                            <option value="Black">Black</option>
                        </select>
                    </div>
                    <div className="product-sizes select" >
                        <h3>Sizes</h3>
                        <select>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="Extra Large">Extra Large</option>
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
