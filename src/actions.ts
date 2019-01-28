import {
	SET_PRICING_DATA,
	SET_LOCATIONS_DATA
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