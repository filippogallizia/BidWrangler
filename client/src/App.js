import ErrorBoundary from './ErrorBoundary';
import './App.css';
import Router from './router/Router';
import BaseLayout from './components/baseLayout/BaseLayout';

function App() {
	return (
		<ErrorBoundary>
			<BaseLayout>
				<Router />
			</BaseLayout>
		</ErrorBoundary>
	);
}

export default App;
