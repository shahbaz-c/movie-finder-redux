import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollWrapper from './ScrollWrapper';

import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ScrollWrapper>
					<App />
				</ScrollWrapper>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
