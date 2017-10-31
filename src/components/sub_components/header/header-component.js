import React, { Component } from 'react';

import logo from '../../../assets/images/logo.png';

class HeaderComponent extends Component {
  render() {
		return(
			<nav className="navbar o">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="../">
              <img src={logo} alt="Logo" />
            </a>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span>Home</span>
              <span>Features</span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <a className={"navbar-item "+ (this.props.active === "Home" ? "is-active":"")}>
                Home
              </a>
              <a href="/features" className={"navbar-item "+ (this.props.active === "Features" ? "is-active":"")}>
                Features
              </a>
              <span className="navbar-item">
                <a className="button is-dark is-outlined is-small" rel="noopener noreferrer" target="_blank" href="https://github.com/gowthamcodingmart/filmfinder">
                  <span className="icon">
                    <i className="fa fa-github"></i>
                  </span>
                  <span>View Source</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
		)
	}
}

export default HeaderComponent;