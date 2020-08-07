import * as React from 'react';
import Helmet from 'react-helmet';
import { injectIntl } from "gatsby-plugin-intl";

// Components
import NavBar from '../components/navbar';
import MenuItem from '../components/navbar/secondaryMenuItem';
import Footer from '../components/footer';
import Extra from '../components/extra';
import Preamble from '../components/generic/preamble';

// Scss
import '../styles/components/policy.scss';

// Constants
import {
	SEO_DESCRIPTION,
	SEO_KEYWORDS
} from '../settings';

const PrivacyPolicy = (props) => (
	<React.Fragment>
		<main className="policy-hero">
			<NavBar MenuItem={MenuItem} />
			<Helmet>
				<title>{props.intl.formatMessage({ id: 'privacy.title' })}</title>
				<meta name="description" content={SEO_DESCRIPTION} />
				<meta name="keywords" content={SEO_KEYWORDS} />
			</Helmet>

			<section className="section section--padding">
				<Preamble light title={props.intl.formatMessage({ id: 'privacy.title' })}>
					{props.intl.formatMessage({ id: 'privacy.content.1' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.2' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.3' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.4' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.5' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.6' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.7' })}

					<ul>
						<li>{props.intl.formatMessage({ id: 'privacy.content.8' })}</li>
						<li>{props.intl.formatMessage({ id: 'privacy.content.9' })}</li>
						<li>{props.intl.formatMessage({ id: 'privacy.content.10' })}</li>
						<li>{props.intl.formatMessage({ id: 'privacy.content.11' })}</li>
						<li>{props.intl.formatMessage({ id: 'privacy.content.12' })}</li>
						<li>{props.intl.formatMessage({ id: 'privacy.content.13' })}</li>
					</ul>

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.14' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.15' })}

					<br />

					{props.intl.formatMessage({ id: 'privacy.content.16' })}

					<br />

					{props.intl.formatMessage({ id: 'privacy.content.17' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.18' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.19' })}

					<strong>{props.intl.formatMessage({ id: 'privacy.content.20' })}</strong>

					<ul>
						<li>{props.intl.formatMessage({ id: 'privacy.content.21' })}</li>
						<li>{props.intl.formatMessage({ id: 'privacy.content.22' })}</li>
						<li>{props.intl.formatMessage({ id: 'privacy.content.23' })}</li>
					</ul>

					{props.intl.formatMessage({ id: 'privacy.content.24' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.25' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.26' })}

					<div className="subtitle">{props.intl.formatMessage({ id: 'privacy.content.27' })}</div>

					{props.intl.formatMessage({ id: 'privacy.content.28' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.29' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.30' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.31' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.32' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.33' })}
					</div>

					<ul>
						<li>{props.intl.formatMessage({ id: 'privacy.content.34' })}</li>
					</ul>

					{props.intl.formatMessage({ id: 'privacy.content.35' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.36' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.37' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.38' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.39' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.40' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.41' })}

					<ul>
						<li>{props.intl.formatMessage({ id: 'privacy.content.42' })}</li>
					</ul>

					{props.intl.formatMessage({ id: 'privacy.content.43' })}

					<ul>
						<li>{props.intl.formatMessage({ id: 'privacy.content.44' })}</li>
					</ul>

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.45' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.46' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.47' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.48' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.49' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.50' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.51' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.52' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.53' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.54' })}

					<ul>
						<li>{props.intl.formatMessage({ id: 'privacy.content.55' })}</li>
					</ul>

					{props.intl.formatMessage({ id: 'privacy.content.56' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.57' })}
					</div>

					{props.intl.formatMessage({ id: 'privacy.content.58' })}

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.59' })}
					</div>

					<ul>
						<li>{props.intl.formatMessage({ id: 'privacy.content.60' })}</li>
						<li>{props.intl.formatMessage({ id: 'privacy.content.61' })}</li>
						<li>{props.intl.formatMessage({ id: 'privacy.content.62' })}</li>
					</ul>

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.63' })}
					</div>

					<ul>
						<li>{props.intl.formatMessage({ id: 'privacy.content.64' })}</li>
						<li>{props.intl.formatMessage({ id: 'privacy.content.65' })}</li>
						<li>{props.intl.formatMessage({ id: 'privacy.content.66' })}</li>
						<li>{props.intl.formatMessage({ id: 'privacy.content.67' })}</li>
						<li>{props.intl.formatMessage({ id: 'privacy.content.68' })}</li>
						<li>{props.intl.formatMessage({ id: 'privacy.content.69' })}</li>
					</ul>

					<div className="subtitle">
						{props.intl.formatMessage({ id: 'privacy.content.70' })}
					</div>

					<ul>
						<li>{props.intl.formatMessage({ id: 'privacy.content.71' })}</li>
					</ul>

				</Preamble>
			</section>
		</main>

		<Extra />

		<Footer />
	</React.Fragment>
);

export default injectIntl(PrivacyPolicy);
