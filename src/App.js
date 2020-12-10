import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsconfig);

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>HI SAI!!!!!!!</h1>
			</div>
		);
	}
}

export default withAuthenticator(App);
