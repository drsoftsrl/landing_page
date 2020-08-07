import * as React from 'react';
import Helmet from 'react-helmet';
import { injectIntl } from "gatsby-plugin-intl";

// Components
import NavBar from '../components/navbar';
import MenuItem from '../components/navbar/secondaryMenuItem';
import Footer from '../components/footer';
import Extra from '../components/extra';
import Preamble from '../components/generic/preamble';

// Constants
import {
	SEO_DESCRIPTION,
	SEO_KEYWORDS
} from '../settings';

const Refunds = (props) => (
	<React.Fragment>
		<Helmet>
			<title>{props.intl.formatMessage({ id: 'refunds.title' })}</title>
			<meta name="description" content={SEO_DESCRIPTION} />
			<meta name="keywords" content={SEO_KEYWORDS} />
		</Helmet>

		<main className="policy-hero">
			<NavBar MenuItem={MenuItem} />

			<section className="section section--padding">
				<Preamble light title={props.intl.formatMessage({ id: 'refunds.title' })}>
					{props.intl.formatMessage({ id: 'refunds.content.1' })}
					<br />
					<br />
					<strong>
						{props.intl.formatMessage({ id: 'refunds.content.2' })}
						<br />
						{props.intl.formatMessage({ id: 'refunds.content.3' })}
					</strong>
					<br />
					<br />
					{props.intl.formatMessage({ id: 'refunds.content.4' })}
					<br />
					<br />
					{props.intl.formatMessage({ id: 'refunds.content.5' })}
				</Preamble>

				<Preamble light title="Restrictions">
					{props.intl.formatMessage({ id: 'refunds.content.6' })}
					<ul>
						<li>{props.intl.formatMessage({ id: 'refunds.content.7' })}</li>
						<li>{props.intl.formatMessage({ id: 'refunds.content.8' })}</li>
						<li>{props.intl.formatMessage({ id: 'refunds.content.9' })}</li>
						<li>{props.intl.formatMessage({ id: 'refunds.content.10' })}</li>
					</ul>
				</Preamble>
			</section>
		</main>

		<Extra />

		<Footer />
	</React.Fragment>
);

export default injectIntl(Refunds);
