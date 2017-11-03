import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../../assets/images/logo.png';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathName: ''
    }
  }
  componentDidMount = () => {
    let path = window.location.pathname;
    this.setState({pathName: path});
  }

  render() {
    let {pathName} = this.state;
		return(
			<nav className="navbar o is-danger">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="../">
              <img src={logo} alt="Logo" />
            </a>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span><Link to='/' className={pathName === '/' ? 'is-active': ''}>Home</Link></span>
              <span><Link to='/features'>Features</Link></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <Link to='/' className={"navbar-item light-color "+(pathName === '/' ? 'is-active': '')}>Home</Link>
              <Link to='/' className={"navbar-item light-color "+(pathName === '/features' ? 'is-active': '')}>Features</Link>
              {/*<Link to='/features' className="navbar-item">Features</Link>*/}
              <span className="navbar-item">
                <a className="button is-light is-outlined is-small" rel="noopener noreferrer" target="_blank" href="https://github.com/gowthamcodingmart/filmfinder">
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