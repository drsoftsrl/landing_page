import React from 'react';

// Components
import Hero from './index';
import Carousel from '../features/carousel';

interface Props {

}

const PricingHero = () => (
	<Hero>
		<Carousel />
	</Hero>
);

export default PricingHero;