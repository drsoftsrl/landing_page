import {
	SET_PRICING_DATA
} from '../constants';

// Interfaces
import { IPricingResponse } from './interfaces';

export const setPricingData = (pricing: IPricingResponse) => ({
	type: SET_PRICING_DATA,
	pricing
});