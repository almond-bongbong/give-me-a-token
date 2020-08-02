import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Header from './Header';
import Home from '../routes/home';
import Callback from '../routes/Callback';
import Profile from '../routes/profile';
import Information from './Information';

export default class App extends Component {
	
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Information />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Callback path="/callback/:platform" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
