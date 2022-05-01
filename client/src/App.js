import ErrorBoundary from './ErrorBoundary';
import './App.css';
import Router from './router/Router';
import BaseLayout from './components/baseLayout/BaseLayout';
import ActionCable from 'actioncable';

import { ActionCableProvider } from 'react-actioncable-provider';
import { useEffect } from 'react';

const cable = ActionCable.createConsumer('ws://localhost:3000/api/v1/cable');

export const MessagesChannel = cable.subscriptions.create('ItemsChannel', {
	connected() {
		console.log('connecre');
		// Called when the subscription is ready for use on the server
	},

	disconnected() {
		console.log('disconnecre');

		// Called when the subscription has been terminated by the server
	},

	received(data) {
		// Called when there's incoming data on the websocket for this channel
	}
});

function App() {
	return (
		<ErrorBoundary>
			<BaseLayout>
				{/*<ActionCableProvider url={`ws://localhost:3000/api/v1/cable`}>*/}
				<Router />
				{/*</ActionCableProvider>*/}
			</BaseLayout>
		</ErrorBoundary>
	);
}

export default App;
