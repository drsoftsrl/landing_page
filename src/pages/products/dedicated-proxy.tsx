import * as React from 'react';
import Helmet from 'react-helmet';
import { injectIntl } from "gatsby-plugin-intl";

// Components
import Footer from '../../components/footer';
import Extra from '../../components/extra';
import ProductsHero from '../../components/hero/productsHero';

// Scss
import '../../styles/components/products.scss';

// Constants
import {
	SEO_DESCRIPTION,
	SEO_KEYWORDS
} from '../../settings';

const DedicatedProxy = (props) => (
	<React.Fragment>
		<Helmet>
			<title>{props.intl.formatMessage({ id: 'dedicated.proxies.title' })}</title>
			<meta name="description" content={SEO_DESCRIPTION} />
			<meta name="keywords" content={SEO_KEYWORDS} />
		</Helmet>

		<ProductsHero
			title={props.intl.formatMessage({ id: 'dedicated.proxies.products.title' })}
			btnText={props.intl.formatMessage({ id: 'dedicated.proxies.products.next' })}
		>
			{props.intl.formatMessage({ id: 'dedicated.proxies.products.desc.1' })}
			<br />
			{props.intl.formatMessage({ id: 'dedicated.proxies.products.desc.2' })}
		</ProductsHero>

		<Extra />

		<Footer />
	</React.Fragment>
);

export default injectIntl(DedicatedProxy);
