import React from 'react';
import { connect } from 'react-redux';

// Scroll
import Scroll from 'react-scroll';

// Components
import MainRoute from '../components/pages/main';

// Request
import requestHandler from '../utils/request';

// Constants
import { PRICES_URL } from '../constants';

// Actions
import { setPricingData, setScrollElement } from '../actions';

// Interfaces
import { IPricingResponse } from '../interfaces';
import get from 'lodash/get';

interface Props {
	doSetPrices(data: object): void,
	doClearScrollElement(): void,
	scrollElement?: any
}

interface State {

}

class MainPage extends React.Component<Props, State> {
	componentDidMount() {
		const { doSetPrices } = this.props;

		this.handleScroll();

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

	handleScroll() {
		const { doClearScrollElement, scrollElement } = this.props;

		if (scrollElement) {
			Scroll.scroller.scrollTo(scrollElement, {
				smooth: true,
				offset: -165
			});

			doClearScrollElement();
		}
	}

	render() {
		return (
			<MainRoute />
		);
	}
}

const mapStateToProps = (state) => ({
	scrollElement: get(state, 'core.scrollElement', null)
});

const mapDispatchToProps = (dispatch) => ({
	doSetPrices: (pricing: IPricingResponse) => dispatch(setPricingData(pricing)),
	doClearScrollElement: () => dispatch(setScrollElement(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
