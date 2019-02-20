import React from 'react';
import Helmet from 'react-helmet';

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

const HttpProxy = () => (
	<React.Fragment>
		<Helmet>
			<title>Http proxies</title>
			<meta name="description" content={SEO_DESCRIPTION} />
			<meta name="keywords" content={SEO_KEYWORDS} />
		</Helmet>

		<ProductsHero title="Anonymous HTTP proxies" btnText="Buy HTTP proxies">
			A HTTP proxy is a server that sits between your HTTP requests, securing and anonymizing them.
			A client connects to the proxy server, then requests a connection, file, or other resource available
			on a different server. The proxy provides the resource either by connecting to the specified server or
			by serving it from a cache. Our proxies also change your IP address making it impossible to trace the
			request to the original caller (you).
		</ProductsHero>

		<Extra />

		<Footer />
	</React.Fragment>
);

export default HttpProxy;
