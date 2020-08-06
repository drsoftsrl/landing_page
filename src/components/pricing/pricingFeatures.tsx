import * as React from 'react';
import { injectIntl } from "gatsby-plugin-intl";

// Components
import { Col, Row } from 'reactstrap';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const PricingFeatures = (props) => (
	<Row className="pricing-features justify-content-center">
		<Col lg={{ size: 11 }}>
			<Row className="row d-flex justify-content-center">
				<Col lg={{ size: 'auto' }} md={{ size: 4 }} sm={{ size: 6 }} className="mt-4 mt-md-0">
					<div className="pricing-feature d-flex align-items-center justify-content-center">
						<FontAwesomeIcon className="icon" icon={faCircle} />
						<p>{props.intl.formatMessage({ id: 'fully.autonomous.title' })}</p>
					</div>
				</Col>
				<Col lg={{ size: 'auto' }} md={{ size: 4 }} sm={{ size: 6 }} className="mt-4 mt-md-0">
					<div className="pricing-feature d-flex align-items-center justify-content-center">
						<FontAwesomeIcon className="icon" icon={faCircle} />
						<p>{props.intl.formatMessage({ id: '24.support.title' })}</p>
					</div>
				</Col>
				<Col lg={{ size: 'auto' }} md={{ size: 4 }} sm={{ size: 6 }} className="mt-4 mt-md-0">
					<div className="pricing-feature d-flex align-items-center justify-content-center">
						<FontAwesomeIcon className="icon" icon={faCircle} />
						<p>{props.intl.formatMessage({ id: 'multiple.datacenters.title' })}</p>
					</div>
				</Col>
				<Col lg={{ size: 'auto' }} md={{ size: 4 }} sm={{ size: 6 }} className="mt-4 mt-lg-0">
					<div className="pricing-feature d-flex align-items-center justify-content-center">
						<FontAwesomeIcon className="icon" icon={faCircle} />
						<p>{props.intl.formatMessage({ id: 'affordable.pricing.title' })}</p>
					</div>
				</Col>
				<Col lg={{ size: 'auto' }} md={{ size: 4 }} sm={{ size: 6 }} className="mt-4 mt-lg-0">
					<div className="pricing-feature d-flex align-items-center justify-content-center">
						<FontAwesomeIcon className="icon" icon={faCircle} />
						<p>{props.intl.formatMessage({ id: 'instant.activation.title' })}</p>
					</div>
				</Col>
			</Row>
		</Col>
	</Row>
);

export default injectIntl(PricingFeatures);
