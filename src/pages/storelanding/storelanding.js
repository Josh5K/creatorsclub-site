import React, { Component } from 'react';
import './storelanding.scss';
import SellerCard from '../../components/sellercard/sellercard';
import axios from 'axios';

class StoreLanding extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sellers: [

      ]
    }
    this.getSellers = this.getSellers.bind(this);
    this.getSellers();
  }

  getSellers() {
    let url = `${process.env.API}/api/v1/sellers`
    url = 'http://localhost:3000/api/v1/sellers'
    axios.get(url).then(response => this.setState({sellers: response.data.message}));
  }

  render() {
    return (
        <div className="grid-container">
          {this.state.sellers.map(seller =>
            <SellerCard seller={seller}/>
          )};
        </div>
    );
  }
}

export default StoreLanding;
