import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './intro_card.scss';

class Intro_Card extends Component {
    render(props) {
        return (
            <div className="Card">
                <img src={this.props.image} alt="image"/>
                <h1>{this.props.title}</h1>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

export default Intro_Card;
