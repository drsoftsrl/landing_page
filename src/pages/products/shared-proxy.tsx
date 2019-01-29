import React from 'react';

// Components
import Footer from '../../components/footer';
import Extra from '../../components/extra';
import ProductsHero from '../../components/hero/productsHero';

// Scss
import '../../styles/components/products.scss';

const SharedProxy = () => (
	<React.Fragment>
		<ProductsHero title="Shared HTTP proxies" btnText="Buy Shared proxies">
			As part of our stack we also offer shared proxies at lower prices. Most of our shared proxies are close
			to the dedicated ones in quality because we don't "crowd" the IP addresses with too many clients.
		</ProductsHero>

		<Extra />

		<Footer />
	</React.Fragment>
);

export default SharedProxy;
