import React from 'react';
import {Provider} from 'react-redux';
import { ToastContainer } from 'react-toastify';

import createStore from './src/utils/createStore';

const store = createStore();

export default ({element}) => (
	<Provider store={store}>
		<ToastContainer autoClose={4000} />
		{element}
	</Provider>
);
