import React from 'react';

// Components
import { Col, Row } from 'reactstrap';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const PricingFeatures = () => (
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
);

export default PricingFeatures;
