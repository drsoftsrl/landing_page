import React from 'react';
import { connect } from 'react-redux';

// Components
import {
	Button,
    Col,
    Container,
    Row
} from 'reactstrap';
import Slider from 'rc-slider';
import Switch from '../generic/switch';
import Preamble from '../generic/preamble';
import PricingFeatures from './pricingFeatures';

// Scss
import '../../styles/components/pricing.scss';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

// Constants
import { BILLING_CYCLES, PRICES_URL } from '../../constants';

// Interfaces
import { IPricingResponse } from '../../interfaces';

// Request
import requestHandler from '../../utils/request';

// Actions
import { setPricingData } from '../../actions';

// Utils
import get from 'lodash/get';

const products = [{
	value: 'proxy',
	label: 'proxy'
}, {
	value: 'socks',
	label: 'socksv5'
}];

const productTypes = [{
	value: 'dedicated',
	label: 'dedicated'
}, {
	value: 'shared',
	label: 'shared'
}];

interface Props {
	doSetPrices(data: object): void,
	discounts?: object,
	prices?: object
}

interface State {
	selectedBillingCycle: string|number,
	selectedProduct: string,
	selectedProductType: string,
	selectedQuantity: number
}

class Pricing extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			selectedBillingCycle: 1,
			selectedProduct: 'proxy',
			selectedProductType: 'dedicated',
			selectedQuantity: 10
		};
	}

	componentDidMount() {
		const { doSetPrices } = this.props;

		requestHandler(PRICES_URL)
			.then(({ data, error }) => {
				if (error) {
					console.error(error);
					return;
				}

				doSetPrices(data);
			})
			.catch(console.error);
	}

	handleChange(field, value) {
		this.setState({
			[field]: value
		});
	}

	get basePrice(): number {
		const { prices } = this.props;
		const {
			selectedProductType,
			selectedProduct
		} = this.state;
		const selectedProductKey = selectedProductType === 'shared' ? `shared_${selectedProduct}` : selectedProduct;
		const selectedProductBasePrice = prices[selectedProductKey] && prices[selectedProductKey].price || 0;

		return parseFloat(selectedProductBasePrice);
	}

	get quantityDiscount(): number {
		const { discounts: { quantity: quantityDiscounts } } = this.props;
		const { selectedQuantity } = this.state;
		let qtyDiscount: string = '0';

		if (quantityDiscounts) {
			const quantities = Object.keys(quantityDiscounts);
			for (let i = 0; i < quantities.length; i++) {
				const qty = parseInt(quantities[i]);
				if (qty <= selectedQuantity) {
					qtyDiscount = quantityDiscounts[qty];
				} else {
					break;
				}
			}
		}

		return parseFloat(qtyDiscount);
	}

	get billingCycleDiscount(): number {
		const { discounts: { interval: billingCycleDiscounts } } = this.props;
		const { selectedBillingCycle } = this.state;

		return parseFloat(selectedBillingCycle !== 1 && billingCycleDiscounts ? billingCycleDiscounts[selectedBillingCycle] : 0);
	}

	get priceWithoutDiscount(): number {
		const { selectedBillingCycle, selectedQuantity } = this.state;
		return this.basePrice * selectedBillingCycle * selectedQuantity;
	}

	get priceWithDiscount(): string {
		const quantityDiscount = this.quantityDiscount / 100;
		const billingCycleDiscount = this.billingCycleDiscount / 100;
		// total without discount
		let total = this.priceWithoutDiscount;
		// total with quantity discount
		total -= total * quantityDiscount;
		// total with all discounts
		total -= total * billingCycleDiscount;

		return total.toFixed(2);
	}

	get totalDiscount() {
		return ((this.priceWithoutDiscount - parseFloat(this.priceWithDiscount)) * 100 / this.priceWithoutDiscount).toFixed(1);
	}

	get biggestQuantityDiscount() {
		const { discounts } = this.props;
		const quantityDiscountValues = discounts.quantity ? Object.keys(discounts.quantity) : [];

		return quantityDiscountValues.length ? parseInt(quantityDiscountValues[quantityDiscountValues.length - 1]) : 0;
	}

	get billingCycleValues() {
		const { discounts } = this.props;

		// TODO maybe move this to the reducer
		const billingCycleValues = discounts.interval ? Object.keys(discounts.interval).map((key) => ({
			label: BILLING_CYCLES[key],
			value: key
		})) : [];

		// Add monthly cycle
		billingCycleValues.unshift({
			label: BILLING_CYCLES[1],
			value: 1
		});

		return billingCycleValues;
	}

	render() {
	    const {
	    	selectedBillingCycle,
			selectedProduct,
			selectedProductType,
			selectedQuantity
	    } = this.state;

        return (
            <section className="pricing section section--padding__bottom">
                <Container>
                    <Row>
                        <Col xs={{ size: 12 }}>
							<div className="pricing-card">
								<Preamble title="Lowest prices in the industry">
									Our prices have always been competitive and we plan on keeping them that way.
									On top of that, we always have discounts based on quantity or billing period so
									make sure you play with our pricing calculator below to estimate your expenses.
								</Preamble>
								<Switch
									selectedOption={selectedProduct}
									options={products}
									onChange={this.handleChange.bind(this, 'selectedProduct')}
								/>

								<Switch
									selectedOption={selectedProductType}
									options={productTypes}
									onChange={this.handleChange.bind(this, 'selectedProductType')}
								/>

								<div>
									<Switch
										className="billing-cycle-switch"
										selectedOption={selectedBillingCycle}
										options={this.billingCycleValues}
										onChange={this.handleChange.bind(this, 'selectedBillingCycle')}
									/>
								</div>

								<br />

								<div className="slider">
									<Slider
										value={selectedQuantity}
										min={1}
										max={this.biggestQuantityDiscount || 100}
										onChange={this.handleChange.bind(this, 'selectedQuantity')}
									/>
								</div>

								<footer className="pricing-card__footer d-flex">
									<div>
										<div className="pricing-card__footer-value text-left">{selectedQuantity}</div>
										<div className="pricing-card__footer-label text-left">Quantity</div>
									</div>
									<div>
										<div className="pricing-card__footer-value text-left">${this.basePrice}</div>
										<div className="pricing-card__footer-label text-left">Base price</div>
									</div>
									<div>
										<div className="pricing-card__footer-value text-left">{this.totalDiscount}%</div>
										<div className="pricing-card__footer-label text-left">Discount</div>
									</div>
									<div className="d-flex pricing-card__footer-total">
										<div>
											<div className="pricing-card__footer-value pricing-total text-left">${this.priceWithDiscount}</div>
											<div className="pricing-card__footer-label text-left">{BILLING_CYCLES[selectedBillingCycle]}</div>
										</div>
										<Button className="btn--green">Order now</Button>
									</div>
								</footer>
							</div>
                        </Col>
                    </Row>

					<PricingFeatures />
                </Container>
            </section>
        );
	}
}

const mapStateToProps = (state) => ({
	discounts: get(state, 'core.discounts', {}),
	prices: get(state, 'core.prices', {})
});


const mapDispatchToProps = (dispatch) => ({
	doSetPrices: (pricing: IPricingResponse) => dispatch(setPricingData(pricing))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);
