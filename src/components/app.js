import { Component } from 'preact';
import Header from './Header';
import Home from '../routes/home';
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
				<Home />
			</div>
		);
	}
}
