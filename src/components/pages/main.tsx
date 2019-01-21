import React from 'react';

// Components
import NavBar from '../navbar';
import Hero from '../hero';
import Pricing from '../pricing';
import Datacenters from '../datacenters';
import Features from '../features';
import Reviews from '../reviews';
import Footer from '../footer';

const IndexPage = () => (
	<React.Fragment>
		<main id="main">
			<NavBar />
			<Hero />
		</main>
		<Pricing />
		<Datacenters />
		<Features />
		<Reviews />
		<Footer />
	</React.Fragment>
);

export default IndexPage;
