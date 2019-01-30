import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from "react-redux";

// Map utils
import getCountryISO3 from 'country-iso-2-to-3';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from 'react-simple-maps';
import { Tooltip, actions as ttActions } from '@tsiry/redux-tooltip';
const { show, hide } = ttActions;

// Request
import requestHandler from '../../utils/request';

// Utils
import shadeColor from '../../utils/shadeColor';
import WorldMap from "../../utils/world-50m.json";
import get from 'lodash/get';

// Components
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import Preamble from '../generic/preamble';
import Switch from '../generic/switch';

// Actions
import { setLocationsData } from '../../actions';

// Scss
import '../../styles/components/datacenters.scss';

// Constants
import { LOCATIONS_URL } from '../../constants';

// Interfaces
import { ILocationsResponse, ICountries } from '../../interfaces';

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
    doSetLocationsData(data: object): void,
	hide(): void,
	show(any): void,
	countries: ICountries
}

interface State {
	selectedProduct: string,
	selectedProductType: string
}

const mapBaseColor = shadeColor('#00b4ff', 0.2);

class Datacenters extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			selectedProduct: 'proxy',
			selectedProductType: 'dedicated'
		};

		this.mapContainer = React.createRef();

		this.handleMove = this.handleMove.bind(this);
		this.handleLeave = this.handleLeave.bind(this);
	}

    componentDidMount() {
		const { doSetLocationsData } = this.props;

		requestHandler(LOCATIONS_URL)
			.then(({ data, error }) => {
				if (error) {
					console.error(error);
					return;
				}

				doSetLocationsData(data);
			})
			.catch(console.error);
	}

	countryHasSelectedProducts(iso3) {
		const { countries } = this.props;
		const { selectedProduct, selectedProductType } = this.state;

		for (let i = 0; i < countries.length; i++) {
			const cty = countries[i];

			if (getCountryISO3(cty.iso.toUpperCase()) === iso3) {
				const products = this.getCountryProducts(iso3);
				const product = selectedProductType === 'shared' ? `shared_${selectedProduct}` : selectedProduct;

				if (products.includes(product)) {
					return true;
				}

			}
		}

		return false;
	}

	getCountryProducts(iso3) {
		const { countries } = this.props;

		for (let i = 0; i < countries.length; i++) {
			const cty = countries[i];

			if (getCountryISO3(cty.iso.toUpperCase()) === iso3) {
				return cty.products;
			}
		}

		return [];
	}

	countryColor(v) {
		return this.countryHasSelectedProducts(v.properties.ISO_A3) ? shadeColor(mapBaseColor, 0.3) : shadeColor("#CFD8DC", 0.9);
	}

	handleChange(field, value) {
		this.setState({
			[field]: value
		});
	}

	handleMove(geography, evt) {
		if (!this.countryHasSelectedProducts(geography.properties.ISO_A3)) return;

		const mapContainer = ReactDOM.findDOMNode(this.mapContainer.current);
		const x = evt.pageX - mapContainer.parentNode.offsetLeft;
		const y = evt.pageY - mapContainer.parentNode.offsetTop;

		this.props.show({
			origin: {x, y},
			content: geography.properties.NAME
		});
	}

	handleLeave() {
		this.props.hide();
	}

	render() {
		const { selectedProduct, selectedProductType } = this.state;
		const self = this;

        return (
            <section className="datacenters section section--padding__bottom">
                <Container>
                    <Preamble title="Global Datacenter Coverage">
						Our datacenters are spread across the globe and we're constantly refreshing our lists to ensure
						a rich set of countries and locations that you can chose from.
					</Preamble>
                    <Row>
                        <Col lg={{ size: 12 }}>
							<div ref={this.mapContainer}>
								<ComposableMap style={{
									width: "100%",
									height: "auto",
								}}>
									<ZoomableGroup center={[0, 25]}>
										<Geographies geography={WorldMap} disableOptimization>
											{
												(geographies, projection) => geographies.map((geography, i) => {
													const countryColor = self.countryColor(geography);
													const hasProduct = self.countryHasSelectedProducts(geography.properties.ISO_A3);

													return <Geography
														key={`${geography.properties.ISO_A3}-${i}`}
														cacheId={`${geography.properties.ISO_A3}-${i}`}
														geography={geography}
														projection={projection}
														onMouseMove={self.handleMove}
														onMouseLeave={self.handleLeave}
														style={{
															default: {
																fill: countryColor,
																stroke: shadeColor(mapBaseColor, 0.7),
																strokeWidth: 0.75,
																outline: "none",
															},
															hover: {
																fill: countryColor,
																stroke: shadeColor(mapBaseColor, 0.7),
																strokeWidth: 0.75,
																outline: "none",
															},
															pressed: {
																fill: shadeColor(countryColor, hasProduct ? -0.2 : 0),
																stroke: shadeColor(mapBaseColor, 0.7),
																strokeWidth: 0.75,
																outline: "none",
															},
														}}
													/>
												})
											}
										</Geographies>
									</ZoomableGroup>
								</ComposableMap>

								<Tooltip />
							</div>

							<div className="text-center mt-3">
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
							</div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
	}
}

const mapStateToProps = (state) => ({
	countries: get(state, 'core.countries', {}),
});

const mapDispatchToProps = (dispatch) => ({
	doSetLocationsData: (data: ILocationsResponse) => dispatch(setLocationsData(data)),
	show: (props) => dispatch(show(props)),
	hide: () => dispatch(hide())
});

export default connect(mapStateToProps, mapDispatchToProps)(Datacenters);
