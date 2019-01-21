import React from 'react';

// Components
import {
    Container,
    Row
} from 'reactstrap';
import Preamble from '../generic/preamble';
import Review from './review';

// Scss
import '../../styles/components/reviews.scss';

const Reviews = () => (
    <section className="reviews section section--padding">
        <Container>
            <Preamble title="What Our Customers Say">
                With almost a decade in the business and tens of thousands of happy
                customers, you are in the best of hands.
            </Preamble>
            <Row className="d-flex align-items-center justify-content-center">
                <Review author="Constance W." authorDepartment="Marketing">
                    I'm a customer for 4 years+. My no.1 go-to provider of fast proxies.
                </Review>
                <Review author="Floyd L." authorDepartment="SEO">
                    The whole experience is...something different.
                    I tried many providers but these guys know what they're doing.
                </Review>
                <Review author="Keith C." authorDepartment="Marketing">
                    The most reliable proxy seller out there. Excellent experience overall!
                </Review>
            </Row>
        </Container>
    </section>
);

export default Reviews;
