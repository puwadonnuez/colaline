import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/layout/Header';
import { Provider } from './Context';
import Results from './components/results/Results';
import AddResult from './components/results/AddResult';
import Gp from './components/results/Gp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<div className="App">
						<Header />
						<Switch>
							<Route exact path="/" component={AddResult} />
							<Route exact path="/results" component={Results} />
							<Route exact path="/results/gp" component={Gp} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
