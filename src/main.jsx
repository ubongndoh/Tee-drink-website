import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/Context';

ReactDOM.render(
	<BrowserRouter>
		<AppProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</AppProvider>
	</BrowserRouter>,

	document.getElementById('root')
);
