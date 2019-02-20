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

const DedicatedProxy = () => (
	<React.Fragment>
		<Helmet>
			<title>Dedicated proxies</title>
			<meta name="description" content={SEO_DESCRIPTION} />
			<meta name="keywords" content={SEO_KEYWORDS} />
		</Helmet>

		<ProductsHero title="Dedicated HTTP proxies" btnText="Buy dedicated proxies">
			Our entire infrastructure is built from the ground-up to ensure that our dedicated proxies are owned
			by a single entity making it impossible to allow any mistakes or accidental sharing.
			<br />
			We do not share dedicated proxies nor do we re-sell or re-use them for other purposes.
			In almost a decade of selling proxies we never had a single complaint on this matter and this is trully
			aligned with the level of respect we have for our customers and the way we do business.
		</ProductsHero>

		<Extra />

		<Footer />
	</React.Fragment>
);

export default DedicatedProxy;
