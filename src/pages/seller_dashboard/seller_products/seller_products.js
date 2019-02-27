import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './seller_products.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class SellerProducts extends Component {
    render() {
        return (
            <div>
                <div className="nav-arrow"><Link to="settings" ><FontAwesomeIcon icon={faArrowLeft} size="4x"/></Link></div>
                <div className="nav-arrow"><Link to="/dashboard" ><FontAwesomeIcon icon={faArrowRight} size="4x"/></Link></div>
                <div className="overview">

                </div>
            </div>
        );
    }
}

export default SellerProducts;
