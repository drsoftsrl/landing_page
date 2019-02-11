import React from 'react';

// Components
import {
	Container
} from 'reactstrap';
import Preamble from '../generic/preamble';

// Constants
import { SITE_URL } from '../../settings';

// Scss
import '../../styles/components/extra.scss';

const Extra = () => (
	<section className="extra section section--padding">
		<Container fluid>
			<Preamble title="Buy Proxies now">
				HTTP Proxies or SOCKS, Shared or Dedicated,
				<br />
				we have them all.
			</Preamble>

			<div className="text-center">
				<a
					href={SITE_URL}
					className="btn btn--green btn--lg">
					Order now
				</a>
			</div>
		</Container>
	</section>
);

export default Extra;
