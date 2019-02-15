import React, { Component } from 'react';
import './storelanding.scss';
import SellerCard from '../../components/sellercard/sellercard';

class StoreLanding extends Component {

  state = {
    sellers: [
      {
        seller: "AquaFPS",
        name: "Cool Clothes",
        image: "https://pbs.twimg.com/profile_images/996760078194757632/3dWEB0P9_400x400.jpg",
        title: "Content Creator",
        youtube: "https://www.youtube.com/user/macaws7",
        twitch: "https://www.twitch.tv/aquafpsgaming",
        twitter: "https://twitter.com/aquafpsgaming",
        storelink: "/store/aquafps"
      },
      {
        seller: "Welyn",
        name: "Merch",
        image: "https://yt3.ggpht.com/a-/AAuE7mAM-9SnhLXdNq-lIGKLwwqzBzszV1vt3sCvpQ=s900-mo-c-c0xffffffff-rj-k-no",
        title: "Content Creator",
        youtube: "www.youtube.com",
        twitch: "www.twitch.com",
        twitter: "www.twitter.com",
        storelink: "/store/welyn"
      }
    ]
  }

  render() {
    return (
        <div className="grid-container">
          {this.state.sellers.map(seller =>
            <SellerCard seller={seller}/>
          )}
        </div>
    );
  }
}

export default StoreLanding;
