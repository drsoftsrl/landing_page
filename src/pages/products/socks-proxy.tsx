import React from 'react';
import { Link } from 'gatsby';

// Components
import Footer from '../../components/footer';
import Extra from '../../components/extra';
import ProductsHero from '../../components/hero/productsHero';

// Scss
import '../../styles/components/products.scss';

const SocksProxy = () => (
	<React.Fragment>
		<ProductsHero title="SOCKSv5 proxies" btnText="Buy SocksV5 proxies">
			A SOCKSv5 proxy is a server that sits between your HTTP requests, securing and anonymizing them.
			A client connects to the proxy server, then requests a connection, file, or other resource available on a different server.
			The SOCKS proxy is considered to be more versatile/capable than the HTTP proxy because it can be used for
			any protocol or port while the HTTP proxy can only be used for HTTP traffic.
		</ProductsHero>

		<Extra />

		<Footer />
	</React.Fragment>
);

export default SocksProxy;
