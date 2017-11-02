import React, { Component } from 'react';

import promoImg from '../../assets/images/promo.png';
import chromeWebStoreImg from '../../assets/images/ChromeWebStore_BadgeWBorder_v2_206x58.png'
import operaAddonsImg from '../../assets/images/addons_206x58_en.png'

class PromotionComponent extends Component {
	render() {
		return (
			<div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-5">
            <figure className="image">
              <img src={promoImg} alt="Description" />
            </figure>
          </div>
          <div className="column is-6 is-offset-1">
            <h1 className="title is-2">
              FilmFinder
            </h1>
            <h2 className="subtitle is-4">
              FilmFinder allows you to browse and download latest and popular YIFY movie torrents in excellent 720p, 1080p and 3D quality from 
              <a className="has-text-danger" href="https://yts.ag"> YTS.AG</a>.
            </h2>
            <br/>
            <div className="field is-grouped field-centered">
              <p className="control">
                <a href="https://chrome.google.com/webstore/detail/filmfinder/gdaidmhpacmfhkkikgbockbpnhhmhnji" rel="noopener noreferrer" target="_blank">
                  <img src={chromeWebStoreImg} alt="Chrome Web Store" />
                </a>
              </p>
              <p className="control">
                <a href="https://addons.opera.com/en/extensions/details/filmfinder/" rel="noopener noreferrer" target="_blank">
                  <img src={operaAddonsImg} alt="Opera Addons" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
		)
	}
}

export default PromotionComponent;