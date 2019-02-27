import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './seller_landing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Overview from '../../../components/seller_dashboard/overview/overview';

class SellerLanding extends Component {
    render() {
        return (
            <div>
                <div class="nav-arrow"><Link to="dashboard/products" ><FontAwesomeIcon icon={faArrowLeft} size="4x"/></Link></div>
                <div class="nav-arrow"><Link to="dashboard/settings" ><FontAwesomeIcon icon={faArrowRight} size="4x"/></Link></div>
                <div className="overview">
                    <Overview />
                </div>
            </div>
        );
    }
}

export default SellerLanding;
