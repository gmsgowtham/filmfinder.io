import React, { Component } from 'react';

import HeaderComponent from '../sub_components/header/header-component';
import PromotionComponent from '../sub_components/promotion/promotion-component';
import FooterComponent from '../sub_components/footer/footer-component';

class HomeComponent extends Component {
  render() {
    return (
        <section className="hero is-fullheight is-default is-bold is-light">
          <div className="hero-head">
            <HeaderComponent active="Home"/>
          </div>
          <div className="hero-body">
            <PromotionComponent />
          </div>
          <FooterComponent/>
        </section>
    );
  }
}

export default HomeComponent;
