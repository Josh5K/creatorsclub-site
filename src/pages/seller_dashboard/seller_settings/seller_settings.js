import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './seller_settings.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Overview from '../../../components/seller_dashboard/overview/overview';

class SellerSettings extends Component {
    render() {
        return (
            <div>
                <div class="nav-arrow"><Link to="/dashboard" ><FontAwesomeIcon icon={faArrowLeft} size="4x"/></Link></div>
                <div class="nav-arrow"><Link to="products" ><FontAwesomeIcon icon={faArrowRight} size="4x"/></Link></div>
                <div className="overview">

                </div>
            </div>
        );
    }
}

export default SellerSettings;
