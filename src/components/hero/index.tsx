import React from 'react';

// Components
import {
    Col,
	Container
} from 'reactstrap';

// Scss
import '../../styles/components/hero.scss';

// Images & icons
import heroImage from '../../images/hero.png';

interface Props {
	minPrice: string,
	children: any
}

const Hero = ({ minPrice, children }: Props) => (
    <div className="main-content">
        <Container fluid>
			{children}
        </Container>

        <Container fluid>
            <Col lg={{ size: 12 }}>
                <img src={heroImage} alt="#" className="main-content__img" />
            </Col>
        </Container>
    </div>
);

export default Hero;
