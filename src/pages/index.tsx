import React from 'react';
import { connect } from 'react-redux';

// Components
import MainRoute from '../components/pages/main';

// Request
import requestHandler from '../utils/request';

// Constants
import { PRICES_URL } from '../constants';

// Actions
import { setPricingData } from '../actions';

// Interfaces
import { IPricingResponse } from '../interfaces';

interface Props {
	doSetPrices(): void
}

interface State {

}

class MainPage extends React.Component<Props, State> {
	componentDidMount() {
		const { doSetPrices } = this.props;

		// TODO handle typescript definition for request
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

	render() {
		return (
			<MainRoute />
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	doSetPrices: (pricing: IPricingResponse) => dispatch(setPricingData(pricing))
});

export default connect(null, mapDispatchToProps)(MainPage);
