import { createStore as reduxCreateStore, combineReducers } from 'redux';
import { reducer as tooltip } from '@tsiry/redux-tooltip';

// Constants
import {
	SET_PRICING_DATA,
	SET_LOCATIONS_DATA,
	SET_SCROLL_ELEMENT,
	SET_TAWK_TO_SCRIPT_LOADED,
	SET_TAWK_STATUS,
	BILLING_CYCLES
} from '../constants';

// Utils
import uniq from 'lodash/uniq';
import minBy from 'lodash/minBy';

const initialState = {
	prices: {},
	discounts: {},
	countries: [],
	scrollElement: null,
	tawkToScriptLoaded: false,
	tawkToStatus: '',
	minPrice: '',
	billingCycles: [],
	allAvailableTags: []
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_PRICING_DATA:
			const { pricing: { prices, discounts } } = action;

			let minPrice = Number.MAX_SAFE_INTEGER;
			Object.keys(prices).forEach((key) => {
				const currentPrice = parseFloat(prices[key].price);

				if (minPrice > currentPrice) {
					minPrice = currentPrice;
				}
			});

			const billingCycleValues = discounts.interval ? Object.keys(discounts.interval).map((key) => ({
				label: BILLING_CYCLES[key],
				value: key
			})) : [];

			// Add monthly cycle
			billingCycleValues.unshift({
				label: BILLING_CYCLES[1],
				value: 1
			});

			return Object.assign({}, state, {
				prices: prices,
				discounts: discounts,
				minPrice: minPrice !== Number.MAX_SAFE_INTEGER ? minPrice.toFixed(1) : null,
				billingCycles: billingCycleValues
			});
		case SET_LOCATIONS_DATA:
			const { locations: { continents } } = action;
			let countries = [];
			let allAvailableTags = [];

			for (let continent in continents) {
				if (continents.hasOwnProperty(continent)) {
					let k = continents[continent].countries;

					for (let country in k) {
						if (k.hasOwnProperty(country)) {
							const countryName = k[country].name;
							const countryIso = k[country].iso_3166;

							let j = k[country].states;

							let services = [];
							let tags = [];

							for (let state in j) {
								if (j.hasOwnProperty(state)) {
									let x = j[state].cities;

									for (let city in x) {
										if (x.hasOwnProperty(city)) {
											let s = x[city].services;
											services = services.concat(Object.keys(s));

											for (let service in s) {
												if (s.hasOwnProperty(service)) {
													tags = tags.concat(s[service]);
												}
											}
										}
									}
								}
							}

							tags = uniq(tags);

							countries.push({
								iso: countryIso,
								name: countryName,
								products: uniq(services),
								tags: tags
							});

							allAvailableTags = allAvailableTags.concat(tags);
						}
					}
				}
			}

			return Object.assign({}, state, {
				countries,
				allAvailableTags: uniq(allAvailableTags)
			});
		case SET_SCROLL_ELEMENT:
			return Object.assign({}, state, {
				scrollElement: action.el
			});
		case SET_TAWK_TO_SCRIPT_LOADED:
			return Object.assign({}, state, {
				tawkToScriptLoaded: true
			});
		case SET_TAWK_STATUS:
			return Object.assign({}, state, {
				tawkToStatus: action.status
			});
		default: return state;
	}
};

const reduxDevExtension = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : undefined;
const createStore = () => reduxCreateStore(combineReducers({ core: reducer, tooltip }), {}, reduxDevExtension);
export default createStore;
