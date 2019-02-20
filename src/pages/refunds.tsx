import React from 'react';
import Helmet from 'react-helmet';

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

const Refunds = () => (
	<React.Fragment>
		<Helmet>
			<title>Refunds</title>
			<meta name="description" content={SEO_DESCRIPTION} />
			<meta name="keywords" content={SEO_KEYWORDS} />
		</Helmet>

		<main className="policy-hero">
			<NavBar MenuItem={MenuItem} />

			<section className="section section--padding">
				<Preamble light title="Refunds">
					Since our website is offering intangible goods refunds are
					honored for the following reasons:
					<br />
					<br />
					<strong>
						* non-delivery of the product: in case we fail to
						deliver the purchased goods you are entitled for a full
						refund
						<br />* service issues: in case our service is not
						functioning as advertised you are entitled for a full
						refund
					</strong>
					<br />
					<br />
					Please note that we do not bear any responsibility and
					therefore we do not satisfy any refund/return/exchange
					requests based on incompatibility of our products with some
					third-party software (plug-ins, add-ons, modules, search
					engines, scripts, extensions etc). We don't guarantee that
					our products are fully compatible with any third-party
					programs and we do not provide support for third-party
					applications.
					<br />
					<br />
					Our Technical Support Team is always eager to assist you and
					deliver highly professional support in a timely manner.
				</Preamble>

				<Preamble light title="Restrictions">
					When using out services, the following restrictions apply:
					<ul>
						<li>GSA</li>
						<li>Xrumer</li>
						<li>Torrent downloading/uploading</li>
						<li>Scrapebox</li>
					</ul>
				</Preamble>
			</section>
		</main>

		<Extra />

		<Footer />
	</React.Fragment>
);

export default Refunds;
