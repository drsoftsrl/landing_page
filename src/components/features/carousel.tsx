import React from 'react';
import { injectIntl } from "gatsby-plugin-intl";

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

const Carousel: React.FunctionComponent<Props> = (props) => {
	const settings = {
		dots: true,
        arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1500
	};

	const slides = [{
		icon: faUserSecret,
		title: props.intl.formatMessage({ id: 'fully.autonomous.title' }),
		details: props.intl.formatMessage({ id: 'fully.autonomous.desc' })
	}, {
		icon: faLifeRing,
		title: props.intl.formatMessage({ id: '24.support.title' }),
		details: props.intl.formatMessage({ id: '24.support.desc' })
	}, {
		icon: faGlobe,
		title: props.intl.formatMessage({ id: 'multiple.datacenters.title' }),
		details: props.intl.formatMessage({ id: 'multiple.datacenters.desc' })
	}, {
		icon: faFighterJet,
		title: props.intl.formatMessage({ id: 'instant.activation.title' }),
		details: props.intl.formatMessage({ id: 'instant.activation.desc' })
	}, {
		icon: faSignal,
		title: props.intl.formatMessage({ id: 'high.speed.title' }),
		details: props.intl.formatMessage({ id: 'high.speed.desc' })
	}, {
		icon: faTerminal,
		title: props.intl.formatMessage({ id: 'powerfull.automation.title' }),
		details: props.intl.formatMessage({ id: 'powerfull.automation.desc' })
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

export default injectIntl(Carousel);
