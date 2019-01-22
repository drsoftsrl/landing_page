import React from 'react';
import { connect } from 'react-redux';

// Utils
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

// Components
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import { Element } from 'react-scroll';
import Switch from '../generic/switch';

// Scss
import '../../styles/components/pricing.scss';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

// Constants
import { SCROLL_PRICING, BILLING_CYCLES } from '../../constants';

interface Props {
    discounts?: object
}

interface State {
	selectedBillingCycle: string|number,
	selectedProduct: string,
	selectedProductType: string
}

const getDefaultBillingCycle = (discountsByInterval) => (discountsByInterval ? Object.keys(discountsByInterval)[0] : null);

class Pricing extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			selectedBillingCycle: getDefaultBillingCycle(props.discounts.interval),
			selectedProduct: 'proxy',
			selectedProductType: 'dedicated'
		};
	}

	static getDerivedStateFromProps(props, state) {
		if (!state.selectedBillingCycle && !isEmpty(props.discounts)) {
			return {
				selectedBillingCycle: getDefaultBillingCycle(props.discounts.interval),
			};
		}

		return null;
	}

	handleProductChange(product) {
		this.setState({
			selectedProduct: product
		});
	}

	handleProductTypeChange(productType) {
		this.setState({
			selectedProductType: productType
		});
	}

	handleBillingCycleChange(opt) {
		this.setState({
			selectedBillingCycle: opt
		});
	}

	render() {
	    const { discounts } = this.props;
	    const { selectedBillingCycle, selectedProduct, selectedProductType } = this.state;

	    // TODO maybe move this to the reducer
	    const billingCycleValues = discounts.interval ? Object.keys(discounts.interval).map((key) => ({
	    	label: BILLING_CYCLES[key],
			value: key
		})) : [];

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

        return (
            <section id="pricing" className="section section--padding__bottom">
                <Container>
                    <Row>
                        <Col xs={{ size: 12 }}>
                            <Element name={SCROLL_PRICING}>
                                <div className="pricing-card pricing-card__first">
                                    <Switch
                                        selectedOption={selectedProduct}
                                        options={products}
										onChange={this.handleProductChange.bind(this)}
                                    />

                                    <Switch
                                        selectedOption={selectedProductType}
                                        options={productTypes}
										onChange={this.handleProductTypeChange.bind(this)}
                                    />

									<br/>
									<br/>

                                    <Switch
                                        selectedOption={selectedBillingCycle}
                                        options={billingCycleValues}
										onChange={this.handleBillingCycleChange.bind(this)}
                                    />
                                </div>
                            </Element>
                        </Col>
                    </Row>
                    <Row className="pricing-features justify-content-center">
                        <Col lg={{ size: 11 }}>
                            <Row className="row d-flex justify-content-center">
                                <Col lg={{ size: 'auto' }} md={{ size: 4 }} sm={{ size: 6 }} className="mt-4 mt-md-0">
                                    <div className="pricing-feature d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon className="icon" icon={faCircle} />
                                        <p>Fully anonymous</p>
                                    </div>
                                </Col>
                                <Col lg={{ size: 'auto' }} md={{ size: 4 }} sm={{ size: 6 }} className="mt-4 mt-md-0">
                                    <div className="pricing-feature d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon className="icon" icon={faCircle} />
                                        <p>24/7 Heroic support</p>
                                    </div>
                                </Col>
                                <Col lg={{ size: 'auto' }} md={{ size: 4 }} sm={{ size: 6 }} className="mt-4 mt-md-0">
                                    <div className="pricing-feature d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon className="icon" icon={faCircle} />
                                        <p>Multiple datacenters</p>
                                    </div>
                                </Col>
                                <Col lg={{ size: 'auto' }} md={{ size: 4 }} sm={{ size: 6 }} className="mt-4 mt-lg-0">
                                    <div className="pricing-feature d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon className="icon" icon={faCircle} />
                                        <p>Affordable pricing</p>
                                    </div>
                                </Col>
                                <Col lg={{ size: 'auto' }} md={{ size: 4 }} sm={{ size: 6 }} className="mt-4 mt-lg-0">
                                    <div className="pricing-feature d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon className="icon" icon={faCircle} />
                                        <p>Instant activation</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
	}
}

const mapStateToProps = (state) => ({
	discounts: get(state, 'discounts', {})
});

export default connect(mapStateToProps, null)(Pricing);
