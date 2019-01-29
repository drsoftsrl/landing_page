// Site config
export const SITE_URL = "https://site.url.goes.here";
export const SITE_NAME = "Site name goes here";
export const TOS_SITE_NAME = 'anonymous-proxies.net';
export const TOS_LAST_UPDATE = 'Apr-27-2018';

// Api config
export const BACKEND_URL = 'http://localhost:8000';
export const PRICES_URL = `${BACKEND_URL}/affiliate/prices/`;
export const LOCATIONS_URL = `${BACKEND_URL}/datacenters/locations/`;
export const SUPPORT_URL = `${BACKEND_URL}/support/`;

// App routes
const PRODUCTS_BASE = '/products';
export const HTTPS_PROXY_ROUTE = `${PRODUCTS_BASE}/http-proxy`;
export const SOCKS_PROXY_ROUTE = `${PRODUCTS_BASE}/socks-proxy`;
export const DEDICATED_PROXY_ROUTE = `${PRODUCTS_BASE}/dedicated-proxy`;
export const SHARED_PROXY_ROUTE = `${PRODUCTS_BASE}/shared-proxy`;
export const TOS_ROUTE = '/terms-of-service';
export const REFUNDS_ROUTE = '/refunds';
export const PRIVACY_ROUTE = '/privacy-policy';

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
export const SET_SCROLL_ELEMENT = 'SET_SCROLL_ELEMENT';