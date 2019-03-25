import React, { Component } from 'react';
import logo from '../../logo.svg';
import './checkout.scss';
import Cart_ from '../../actions/cart';

class Checkout extends Component {

    completeOrder() {
        alert('Order Complete!');
        Cart_.clearCart();
        window.location.replace('/');
    }

  render() {
    return (
        <div className="form-grid">
            <div className="form-1">
                <h1>Shipping information</h1>
                <hr/>
                <form>
                    <label htmlFor="fullName">Full Name</label>
                    <input name="fullName" id="fullname" ref={(input) => {this.Fullname = input }} type="text" defaultValue=""/>
                    <label htmlFor="address">Address</label>
                    <input name="address" id="address" ref={(input) => {this.Address = input }} type="text" defaultValue=""/>
                    <label htmlFor="city">City</label>
                    <input name="city" id="city" ref={(input) => {this.City = input }} type="text" defaultValue=""/>
                    <label htmlFor="zip">Postal / Zip Code</label>
                    <input name="zip" id="zip" ref={(input) => {this.Zip = input }} type="text" defaultValue=""/>
                    <label htmlFor="state">Province / State</label>
                    <input name="state" id="state" ref={(input) => {this.State = input }} type="text" defaultValue=""/>
                    <label htmlFor="country">Country</label>
                    <input name="country" id="country" type="text" ref={(input) => {this.Country = input }} defaultValue=""/>
                </form>
            </div>
            <div className="form-2">
                <h1>Credit Card information</h1>
                <hr/>
                <form>
                    <label htmlFor="cardholder-name">Cardholder Name</label>
                    <input name="cardholder-name" id="cardholder-name" ref={(input) => {this.CardName = input }} type="text" defaultValue=""/>
                    <label htmlFor="card-number">Credit Card Number</label>
                    <input name="card-number" id="card-number" ref={(input) => {this.CardNumber = input }} type="text" defaultValue=""/>
                    <label htmlFor="security-code">Security Code</label>
                    <input name="security-code" id="security-code" ref={(input) => {this.SecurityCode = input }} type="text" defaultValue=""/>
                    <label htmlFor="expiration">Expiration Date</label>
                    <input name="expiration" id="expiration" ref={(input) => {this.Expiration = input }} type="text" defaultValue="" placeholder="MM/YY"/>
                </form>
                <hr/>
                <h5>Order #12312</h5>
                <p>Total: $1.99</p>
                <button className="btn btn-primary" onClick={this.completeOrder.bind(this)}>Complete Order</button>
            </div>
        </div>
    );
  }
}

export default Checkout;
