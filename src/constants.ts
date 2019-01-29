// Site config
export const SITE_URL = "https://site.url.goes.here";
export const SITE_NAME = "Site name goes here";

// Api config
export const BACKEND_URL = 'http://localhost:8000';
export const PRICES_URL = `${BACKEND_URL}/affiliate/prices/`;
export const LOCATIONS_URL = `${BACKEND_URL}/datacenters/locations/`;
export const SUPPORT_URL = `${BACKEND_URL}/support/`;

// App config
export const SCROLL_DATACENTERS = 'datacenters';
export const SCROLL_PRICING = 'pricing';
export const SCROLL_FEATURES = 'features';
export const SCROLL_SUPPORT = 'support';

export const BILLING_CYCLES = {
	1: 'Monthly',
	3: 'Quarterly',
	6: 'Bi-annually',
	12: 'Yearly'
};

// Actions
export const SET_PRICING_DATA = 'SET_PRICING_DATA';
export const SET_LOCATIONS_DATA = 'SET_LOCATIONS_DATA';