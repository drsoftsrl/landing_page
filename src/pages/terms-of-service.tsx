import * as React from 'react';
import Helmet from 'react-helmet';
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";

// Components
import NavBar from '../components/navbar';
import MenuItem from '../components/navbar/secondaryMenuItem';
import Footer from '../components/footer';
import Extra from '../components/extra';
import Preamble from '../components/generic/preamble';

// Constants
import {
	TOS_SITE_NAME,
	TOS_LAST_UPDATE,
	SEO_KEYWORDS,
	SEO_DESCRIPTION
} from '../settings';

const Tos = (props) => (
	<React.Fragment>
		<Helmet>
			<title>{props.intl.formatMessage({ id: 'tos.title' })}</title>
			<meta name="description" content={SEO_DESCRIPTION} />
			<meta name="keywords" content={SEO_KEYWORDS} />
		</Helmet>

		<main className="policy-hero">
			<NavBar MenuItem={MenuItem} />
			<section className="section section--padding">
				<Preamble
					light
					title={props.intl.formatMessage({ id: 'tos.title' })}
					secondaryTitle={`${props.intl.formatMessage({ id: 'tos.lastupdated' })} ${TOS_LAST_UPDATE}`}>
					<div>
						<FormattedMessage
							id="tos.content"
							values={{
								siteName: <u>TOS_SITE_NAME</u>,
								br: <br />
							}}
						/>
					</div>
				</Preamble>
			</section>
		</main>

		<Extra />

		<Footer />
	</React.Fragment>
);

export default injectIntl(Tos);
