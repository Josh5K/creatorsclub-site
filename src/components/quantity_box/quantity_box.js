import React, { Component } from 'react';
import './quantity_box.scss';
import { Link } from 'react-router-dom'

class QuantityBox extends Component {

    constructor() {
        super()

        this.state = {
            value: 1
        }
    }

    onDecrement() {
        if (this.state.value <= 0) return;
        this.setState({value: --this.state.value});
    }

    onIncrement() {
        this.setState({value: ++this.state.value});
    }

  render() {
    return (
            <div className="qty-box">
                <span className="dec" onClick={this.onDecrement.bind(this)} onTouchStart={this.onDecrement}>–</span>
                <span className="qty" id="qty-value">{this.state.value}</span>
                <span className="inc" onClick={this.onIncrement.bind(this)} onTouchStart={this.onIncrement}>+</span>
            </div>
    );
  }
}

export default QuantityBox;
