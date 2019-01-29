import React from 'react';

// Components
import NavBar from '../navbar/secondary';
import Preamble from '../generic/preamble';

// Constants
import { SITE_URL } from '../../constants';

interface Props {
	children: any,
	btnText: string,
	title: string
}

const ProductsHero = ({ children, title, btnText }) => (
	<main className="products-hero">
		<NavBar />

		<section className="section section--padding">
			<Preamble light title={title}>
				{children}
			</Preamble>

			<div className="text-center">
				<a
					href={SITE_URL}
					className="btn btn--green btn--lg">
					{btnText}
				</a>
			</div>
		</section>
	</main>
);

export default ProductsHero;
