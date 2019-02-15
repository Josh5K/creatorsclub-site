import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faTwitch } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'
import './sellercard.scss';

class SellerCard extends Component {
    render() {
        return (
            <Link style={{ textDecoration: 'none' }} to={this.props.seller.storelink} className="cardlink">
                <div className="card">
                    <img src={this.props.seller.image} alt="John" />
                    <h1>{this.props.seller.seller}</h1>
                    <p className="title">{this.props.seller.name}</p>
                    <p>{this.props.seller.title}</p>
                    <div className="icons">
                        <Link to={this.props.seller.youtube}><FontAwesomeIcon icon={faYoutube} /></Link>
                        <Link to={this.props.seller.twitch}><FontAwesomeIcon icon={faTwitch} /></Link>
                        <Link to={this.props.seller.twitter}><FontAwesomeIcon icon={faTwitter} /></Link>
                    </div>
                </div>
            </Link>
        );
    }
}

export default SellerCard;
