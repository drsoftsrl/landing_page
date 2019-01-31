import React from 'react';

// Components
import {
	Col,
	Container,
	Row
} from 'reactstrap';

// Icons
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

// SCSS
import styles from '../../styles/components/generic/carouselSlide.module.scss';

interface Props {
	icon: any,
	details: any,
	title: string
}

const CarouselSlide: React.FunctionComponent<Props> = ({ icon, details, title }) => (
	<Container className={styles.slide}>
		<Row className="d-flex align-items-center">
			<Col xs={12} lg={4} className="text-center p-4">
				<FontAwesomeIcon icon={icon} className={styles.slideIcon} />
			</Col>

			<Col xs={12} lg={8} className="text-left p-5">
				<h3>
					{title}
				</h3>

				<p>
					{details}
				</p>
			</Col>
		</Row>
	</Container>
);

export default CarouselSlide;
