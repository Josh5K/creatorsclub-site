import React, { Component } from 'react';
import {faBookmark, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './cart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cart_ from '../../actions/cart'

class Cart extends Component {

	toCheckout() {
		window.location.replace('/checkout');
	}

  render() {
    return (
        <div className="container">
	        <table id="cart" className="table table-hover table-condensed">
    			<thead>
					<tr>
						<th style={{width: '50%'}}>Product</th>
						<th style={{width: '10%'}}>Price</th>
						<th style={{width: '8%'}}>Quantity</th>
						<th style={{width: '22%'}} className="text-center">Subtotal</th>
						<th style={{width: '10%'}}></th>
					</tr>
				</thead>
				<tbody>
					{Cart_.getCart().map(item =>
					<tr>
						<td data-th="Product">
							<div className="row">
								<div className="col-sm-2 hidden-xs">
                                    <img src={item.image} alt="product" className="img-responsive cart-img"/>
                                </div>
								<div className="col-sm-10">
									<h4 className="nomargin name">{item.name}</h4>
									<p>{item.description}</p>
								</div>
							</div>
						</td>
						<td data-th="Price">$ {item.seller_price}</td>
						<td data-th="Quantity">
                            <p className="text-center"><input min='1' className="qtyInput" type="number" id={item.printful_variant_id} onChange={() => Cart_.modifyQuantity(item, document.getElementById(item.printful_variant_id).value)} defaultValue={item.quantity} /></p>
						</td>
						<td data-th="Subtotal" className="text-center">$ {(item.seller_price * item.quantity)}</td>
						<td className="actions" data-th="">
							<button className="btn btn-info btn-sm" ><FontAwesomeIcon icon={faBookmark}/></button>
							<button className="btn btn-danger btn-sm" value={item.printful_id} onClick={() => Cart_.removeFromCart(item.printful_variant_id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
						</td>
					</tr>
					)}
				</tbody>
				<tfoot>
					<tr className="visible-xs">
						<td className="text-center"><strong>Total $ 1.99</strong></td>
					</tr>
					<tr>
						<td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
						<td colSpan="2" className="hidden-xs"></td>
						<td className="hidden-xs text-center"><strong>Total $1.99</strong></td>
						<td><a href="#" className="btn btn-success btn-block" onClick={this.toCheckout.bind(this)}>Checkout <i className="fa fa-angle-right"></i></a></td>
					</tr>
				</tfoot>
			</table>
        </div>
    );
  }
}

export default Cart;
