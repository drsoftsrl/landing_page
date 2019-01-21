import React from 'react';

// Components
import {
    Col,
	Container,
    Row
} from 'reactstrap';

// Scss
import '../../styles/components/hero.scss';

// Images & icons
import heroImage from '../../images/hero-illustration-4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => (
    <div className="main-content">
        <Container>
            <Row>
                <Col
                    xl={{ size: 8, offset: 2 }}
                    lg={{ size: 10, offset: 1 }}
                >
                    <h1 className="main-content__title mb-3 mb-lg-4 h2">
                        Anonymous
                        <br />
                        HTTP & SOCKSv5 Proxies
                    </h1>
                    <p className="main-content__lead lead mb-4">
                        Fully anonymous private proxies
                        <br />
                        (shared or dedicated) starting at just $0.7
                    </p>
                    <a
                        href="#"
                        className="btn btn--green btn--lg mb-0 mt-4 d-inline-flex align-items-center">
                        Members
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </a>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Col lg={{ size: 12 }}>
                <img src={heroImage} alt="#" className="main-content__img" />
            </Col>
        </Container>
    </div>
);

export default Hero;
