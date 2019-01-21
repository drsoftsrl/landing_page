import React from 'react';

// Components
import NavBar from '../navbar';
import Hero from '../hero';
import Pricing from '../pricing';
import Datacenters from '../datacenters';
import Features from '../features';
import Reviews from '../reviews';
import Footer from '../footer';
import { Element } from 'react-scroll';

// Constants
import {
  SCROLL_DATACENTERS,
  SCROLL_FEATURES,
  SCROLL_PRICING,
  SCROLL_SUPPORT
} from '../../constants';

const IndexPage = () => (
	<React.Fragment>
		<main id="main">
			<NavBar />
			<Hero />
		</main>

		<Pricing />

		<Element name={SCROLL_DATACENTERS}>
			<Datacenters />
		</Element>

		<Element name={SCROLL_FEATURES}>
			<Features />
		</Element>

		<Reviews />

		<Footer />
	</React.Fragment>
);

export default IndexPage;
