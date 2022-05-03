import React, { useEffect, useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import './App.css';
import Router from './router/Router';
import BaseLayout from './components/baseLayout/BaseLayout';
import ActionCable from 'actioncable';
import { getUserInStorage } from './pages/loginPage/helpers/helpers';
import { UserContext } from './userContext/userContext';

const cable = ActionCable.createConsumer('ws://localhost:3000/api/v1/cable');

export const ItemsChannel = cable.subscriptions.create('ItemsChannel', {
	received(data) {
		// Called when there's incoming data on the websocket for this channel
	}
});

function App() {
	const [user, setUser] = useState({ name: '', id: undefined });

	return (
		<ErrorBoundary>
			<UserContext.Provider value={{ user, setUser }}>
				<BaseLayout>
					<Router />
				</BaseLayout>
			</UserContext.Provider>
		</ErrorBoundary>
	);
}

export default App;
