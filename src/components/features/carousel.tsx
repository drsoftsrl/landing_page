import React from 'react';

// Components
import Slider from "react-slick";
import CarouselSlide from './carouselSlide';

// SCSS
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import '../../styles/components/generic/carousel.scss';

import {
	faUserSecret,
	faLifeRing,
	faGlobe,
	faFighterJet,
	faSignal,
	faTerminal
} from '@fortawesome/free-solid-svg-icons';

interface Props {

}

const Carousel: React.FunctionComponent<Props> = () => {
	const settings = {
		dots: true,
        arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1500
	};

	const slides = [{
		icon: faUserSecret,
		title: 'Fully Anonymous',
		details: `All our proxies are carefully set and monitored in order to
		 ensure they are 100% anonymous and without any sort of ip or dns leaks.`
	}, {
		icon: faLifeRing,
		title: '24/7 Heroic Support',
		details: `Sometimes the kind of support you offer means more than your product and we know that. 
		We're always available and you can give us a try.`
	}, {
		icon: faGlobe,
		title: 'Multiple Datacenters',
		details: `We're offering more than 100 locations for our proxies and we constantly refresh our 
		list to add more locations from all over the world.`
	}, {
		icon: faFighterJet,
		title: 'Instant Activation',
		details: `Your proxies are activated instantly once your payment enters our system and we really stand 
		behind this word which is not just for marketing.`
	}, {
		icon: faSignal,
		title: 'High Speed Connections',
		details: `All our servers are attached to 1Gbps and 10Gbps connections and we constantly update our 
		networking stacks to maintain a top position in terms of speed.`
	}, {
		icon: faTerminal,
		title: 'Powerful Automation',
		details: `From status checkers to supervisors and service testers we have it all. Our stack is fully 
		automated and self-healing without any intervention.`
	}];

	return (
		<Slider {...settings}>
			{slides.map(({ icon, title, details }, index) => (
				<CarouselSlide
					key={index}
					icon={icon}
					title={title}
					details={details}
				/>
			))}
		</Slider>
	);
};

export default Carousel;
