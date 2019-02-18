import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faTwitch } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'
import './sellercard.scss';

class SellerCard extends Component {
    render() {
        return (
                <div className="card">
                    <Link style={{ textDecoration: 'none' }} to={this.props.seller.storelink} className="cardlink">
                        <img src={this.props.seller.image} alt="John" />
                        <h1>{this.props.seller.seller}</h1>
                        <p className="title">{this.props.seller.name}</p>
                        <p>{this.props.seller.title}</p>
                    </Link>
                    <div className="icons">
                        <a href={this.props.seller.youtube}><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href={this.props.seller.twitch}><FontAwesomeIcon icon={faTwitch} /></a>
                        <a href={this.props.seller.twitter}><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                </div>
        );
    }
}

export default SellerCard;
