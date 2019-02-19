import React from 'react';

// Components
import NavBar from '../navbar';
import MenuItem from '../navbar/secondaryMenuItem';
import Preamble from '../generic/preamble';

// Constants
import { MEMBERS_URL } from '../../settings';

interface Props {
	children: any,
	btnText: string,
	title: string
}

const ProductsHero = ({ children, title, btnText }: Props) => (
	<main className="products-hero">
		<NavBar MenuItem={MenuItem} />

		<section className="section section--padding">
			<Preamble light title={title}>
				{children}
			</Preamble>

			<div className="text-center">
				<a
					href={MEMBERS_URL}
					className="btn btn--green btn--lg">
					{btnText}
				</a>
			</div>
		</section>
	</main>
);

export default ProductsHero;
