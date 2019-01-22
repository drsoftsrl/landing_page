import { createStore as reduxCreateStore } from 'redux';

// Constants
import {
	SET_PRICING_DATA
} from '../constants';

const reducer = (state, action) => {
	switch(action.type) {
		case SET_PRICING_DATA:
			const { pricing } = action;
			const { discounts } = pricing;

			return Object.assign({}, state, {
				prices: pricing.prices,
				discounts: discounts
			});
		default: return state;
	}
};

const initialState = {
	prices: {},
	discounts: {}
};

const reduxDevExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const createStore = () => reduxCreateStore(reducer, initialState, reduxDevExtension);
export default createStore;
