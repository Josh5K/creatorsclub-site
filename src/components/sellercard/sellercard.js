import React, { Component } from 'react';
import { faYoutube, faTwitter, faTwitch } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'
import './sellercard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SellerCard extends Component {
    render() {
        return (
                <div className="card">
                    <Link style={{ textDecoration: 'none' }} to={"/store/" + this.props.seller.category} className="cardlink">
                        <img src={this.props.seller.users[0].profile_picture} alt="Seller" />
                        <h1>{this.props.seller.users[0].username}</h1>
                        <p className="title">{this.props.seller.seller_title}</p>
                        <p>{this.props.seller.seller_name }</p>
                    </Link>
                    <div className="icons">
                        <a href={this.props.seller.users[0].youtube}><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href={this.props.seller.users[0].twitch}><FontAwesomeIcon icon={faTwitch} /></a>
                        <a href={this.props.seller.users[0].twitter}><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                </div>
        );
    }
}

export default SellerCard;
