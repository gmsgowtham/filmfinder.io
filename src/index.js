import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/stylesheets/style.css';

import HomeComponent from './components/home/home-component';

ReactDOM.render((
	<BrowserRouter>
		<HomeComponent />
	</BrowserRouter>
), document.getElementById('root'));
