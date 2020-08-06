import * as React from 'react';
import { injectIntl } from "gatsby-plugin-intl";

// Components
import {
    Container,
    Row
} from 'reactstrap';
import Preamble from '../generic/preamble';
import Review from './review';

// Scss
import '../../styles/components/reviews.scss';

const Reviews = (props) => (
    <section className="reviews section section--padding">
        <Container>
            <Preamble title={props.intl.formatMessage({ id: 'customer.opinion.title' })}>
                {props.intl.formatMessage({ id: 'customer.opinion.desc' })}
            </Preamble>
            <Row className="d-flex align-items-center justify-content-center">
                <Review author="Constance W." authorDepartment="Marketing">
                    {props.intl.formatMessage({ id: 'customer.opinion.1' })}
                </Review>
                <Review author="Floyd L." authorDepartment="SEO">
                    {props.intl.formatMessage({ id: 'customer.opinion.2' })}
                </Review>
                <Review author="Keith C." authorDepartment="Marketing">
                    {props.intl.formatMessage({ id: 'customer.opinion.3' })}
                </Review>
            </Row>
        </Container>
    </section>
);

export default injectIntl(Reviews);
