import * as React from 'react';
import { injectIntl } from "gatsby-plugin-intl";

// Components
import {
	Container
} from 'reactstrap';
import Preamble from '../generic/preamble';

// Constants
import { MEMBERS_URL } from '../../settings';

// Scss
import '../../styles/components/extra.scss';

const Extra = (props) => (
	<section className="extra section section--padding">
		<Container fluid>
			<Preamble title={props.intl.formatMessage({ id: 'common.buy.proxies.now' })}>
				{props.intl.formatMessage({ id: 'extra.description.1' })}
				<br />
				{props.intl.formatMessage({ id: 'extra.description.2' })}
			</Preamble>

			<div className="text-center">
				<a
					href={MEMBERS_URL}
					className="btn btn--green btn--lg">
					{props.intl.formatMessage({ id: 'common.order.now' })}
				</a>
			</div>
		</Container>
	</section>
);

export default injectIntl(Extra);
