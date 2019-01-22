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