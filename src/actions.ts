import {
	SET_PRICING_DATA,
	SET_LOCATIONS_DATA,
	SET_SCROLL_ELEMENT,
	SET_TAWK_TO_SCRIPT_LOADED,
	SET_TAWK_STATUS
} from './constants';

// Interfaces
import { IPricingResponse, ILocationsResponse } from './interfaces';

export const setPricingData = (pricing: IPricingResponse) => ({
	type: SET_PRICING_DATA,
	pricing
});

export const setLocationsData = (locations: ILocationsResponse) => ({
	type: SET_LOCATIONS_DATA,
	locations
});

export const setScrollElement = (el: any) => ({
	type: SET_SCROLL_ELEMENT,
	el
});

export const setTawkToScriptLoaded = () => ({
	type: SET_TAWK_TO_SCRIPT_LOADED
});

export const setTawkToStatus = (status: string) => ({
	type: SET_TAWK_STATUS,
	status
});