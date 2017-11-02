import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
              <span><Link to='/'>Home</Link></span>
              <span><Link to='/features'>Features</Link></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <Link to='/' className="navbar-item">Home</Link>
              <Link to='/' className="navbar-item">Features</Link>
              {/*<Link to='/features' className="navbar-item">Features</Link>*/}
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