import React from 'react';

// Constants
import NavBar from '../components/navbar';
import MenuItem from '../components/navbar/secondaryMenuItem';
import Footer from '../components/footer';
import PricingHero from '../components/hero/pricingHero';
import Pricing from '../components/pricing';
import Features from '../components/features';
import Reviews from '../components/reviews';

interface Props {

}

interface State {

}

class PricingPage extends React.Component<Props, State> {
	render() {
		return (
			<React.Fragment>
				<main className="main">
					<NavBar MenuItem={MenuItem} />
					<PricingHero />
				</main>

				<Pricing />

				<Features />

				<Reviews />

				<Footer />
			</React.Fragment>
		);
	}
}

export default PricingPage;
