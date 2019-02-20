import React from 'react';
import Helmet from 'react-helmet';

// Constants
import NavBar from '../components/navbar';
import MenuItem from '../components/navbar/secondaryMenuItem';
import Footer from '../components/footer';
import PricingHero from '../components/hero/pricingHero';
import Pricing from '../components/pricing';
import Features from '../components/features';
import Reviews from '../components/reviews';

// Constants
import {
	SEO_DESCRIPTION,
	SEO_KEYWORDS
} from '../settings';

interface Props {

}

interface State {

}

class PricingPage extends React.Component<Props, State> {
	render() {
		return (
			<React.Fragment>
				<Helmet>
					<title>Pricing</title>
					<meta name="description" content={SEO_DESCRIPTION} />
					<meta name="keywords" content={SEO_KEYWORDS} />
				</Helmet>

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
