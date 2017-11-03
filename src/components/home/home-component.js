import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HeaderComponent from '../sub_components/header/header-component';
import PromotionComponent from '../promotion/promotion-component';
import FeaturesComponent from '../features/features-component';
import FooterComponent from '../sub_components/footer/footer-component';

class HomeComponent extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-default bg-black">
        <div className="hero-head">
          <HeaderComponent/>
        </div>
        <div className="hero-body">
          <Switch>
            <Route exact path='/' component={PromotionComponent}/>
            <Route exact path='/features' component={FeaturesComponent}/>
          </Switch>
        </div>
        <FooterComponent/>
      </section>
    );
  }
}

export default HomeComponent;
