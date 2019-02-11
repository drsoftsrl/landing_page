import React from 'react';

// Components
import NavBar from '../navbar';
import MenuItem from '../navbar/menuItem';
import MainHero from '../hero/mainHero';
import Pricing from '../pricing';
import Datacenters from '../datacenters';
import Features from '../features';
import Reviews from '../reviews';
import Footer from '../footer';
import Support from '../support';
import Extra from '../extra';
import { Element } from 'react-scroll';

// Constants
import {
  SCROLL_DATACENTERS,
  SCROLL_FEATURES,
  SCROLL_SUPPORT
} from '../../constants';

const IndexPage = () => (
	<React.Fragment>
		<main className="main">
			<NavBar MenuItem={MenuItem} />
			<MainHero />
		</main>

		<Pricing />

		<Element name={SCROLL_DATACENTERS}>
			<Datacenters />
		</Element>

		<Element name={SCROLL_FEATURES}>
			<Features />
		</Element>

		<Reviews />

		<Element name={SCROLL_SUPPORT}>
			<Support />
		</Element>

		<Extra />

		<Footer main />
	</React.Fragment>
);

export default IndexPage;
