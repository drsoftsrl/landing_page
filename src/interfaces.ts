// Pricing response interfaces
export interface IPrices {
	[key: string]: {
		price: string,
		tags: Array<string>
	}
}

export interface IDiscounts {
	interval: {
		[key: number]: number
	},
	quantity: {
		[key: number]: number
	}
}

export interface IPricingResponse {
	prices: IPrices,
	discounts: IDiscounts
}

// Locations response interfaces
export interface ICitiesResponse {
	[key: number]: {
		name: string,
		services: {
			[key: string]: Array<string>
		}
	}
}

export interface IStatesResponse {
	[key: number]: {
		name: string,
		cities: Array<ICitiesResponse>
	}
}

export interface ICountriesResponse {
	[key: number]: {
		name: string,
		iso_3166: string,
		states: Array<IStatesResponse>
	}
}

export interface IContinentsResponse {
	[key: number]: {
		name: string,
		countries: Array<ICountriesResponse>
	}
}

export interface ILocationsResponse {
	continents: Array<IContinentsResponse>
}

// State countries
export interface ICountries {
	iso: string,
	name: string,
	products: Array<string>,
	tags: Array<string>
}