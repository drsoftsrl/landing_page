import React from 'react';

// Components
import {
    Col,
    Container,
    Row
} from 'reactstrap';

// Scss
import '../../styles/components/pricing.scss';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

interface Props {

}

interface State {

}

class Pricing extends React.Component<Props, State> {
	render() {
        return (
            <section id="pricing" className="section section--padding__bottom">
                <Container>
                    <Row>
                        <Col xs={{ size: 12 }}>
                            <div className="pricing-card pricing-card__first">
                                <h5 className="pricing-card__title mb-4">2 years</h5>
                                <h3 className="pricing-card__value"><span className="pricing-currency">$</span><span
                                    className="pricing-cost">2.99</span><span className="pricing-period">/mo</span></h3>
                                <footer className="pricing-card__footer">
                                    <p className="mb-1 pt-4">Billed $79.99 every two years</p>
                                    <h5 className="mb-0">Save 40%</h5>
                                </footer>
                                <div className="text-center mt-4">
                                    <a href="#" className="btn btn--green">Get Started</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pricing-features justify-content-center">
                        <Col lg={{ size: 11 }}>
                            <Row className="row d-flex justify-content-center">
                                <Col lg={{ size: 'auto' }} md={{ size: 4 }} sm={{ size: 6 }} className="mt-4 mt-md-0">
                                    <div className="pricing-feature d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon className="icon" icon={faCircle} />
                                        <p>Fully anonymous</p>
                                    </div>
                                </Col>
                                <Col lg={{ size: 'auto' }} md={{ size: 4 }} sm={{ size: 6 }} className="mt-4 mt-md-0">
                                    <div className="pricing-feature d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon className="icon" icon={faCircle} />
                                        <p>24/7 Heroic support</p>
                                    </div>
                                </Col>
                                <Col lg={{ size: 'auto' }} md={{ size: 4 }} sm={{ size: 6 }} className="mt-4 mt-md-0">
                                    <div className="pricing-feature d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon className="icon" icon={faCircle} />
                                        <p>Multiple datacenters</p>
                                    </div>
                                </Col>
                                <Col lg={{ size: 'auto' }} md={{ size: 4 }} sm={{ size: 6 }} className="mt-4 mt-lg-0">
                                    <div className="pricing-feature d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon className="icon" icon={faCircle} />
                                        <p>Affordable pricing</p>
                                    </div>
                                </Col>
                                <Col lg={{ size: 'auto' }} md={{ size: 4 }} sm={{ size: 6 }} className="mt-4 mt-lg-0">
                                    <div className="pricing-feature d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon className="icon" icon={faCircle} />
                                        <p>Instant activation</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
	}
}

export default Pricing;
