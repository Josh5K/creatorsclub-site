import React, { Component } from 'react';
import logo from '../../logo.svg';
import './landing.scss';
import Intro_Card from '../../components/intro_card/intro_card';
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'

class Landing extends Component {
  render() {
    return (
        <div>
            <div className="Headline">
                <h1>What makes us right?</h1>
                <p>Its what makes us different.</p>
            </div>
            <div className="CardRow">
                <div className="CardColumn">
                    <Intro_Card image={card2} title="Support" desc="We are here to help you and view our clients than more than just a number in a spread sheet. Have a problem? We can solve it."/>
                </div>
                <div className="CardColumn">
                    <Intro_Card image={card1} title="Content" desc="Our experts help you diversify. Whether building an audience for the first time or expanding to exciting new platforms."/>
                </div>
                <div className="CardColumn">
                    <Intro_Card image={card3} title="Security" desc="At the end of the day your content stays just that. Yours. We never touch your adsense revenue or take ownership of your hard work."/>
                </div>
                <div className="CardColumn">
                    <Intro_Card image={card4} title="Blast Off" desc="Whether you have ten or a million viewers, our solutions work for everyone,developing growth and building a community."/>
                </div>
            </div>
        </div>
    );
  }
}

export default Landing;
