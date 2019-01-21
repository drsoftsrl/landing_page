import React from 'react';

// Constants
// TODO how to handle this ???
import { SITE_NAME } from '../../constants';

// Components
import {
    Container,
    Row
} from 'reactstrap';
import Preamble from '../generic/preamble';
import FooterColumn from './FooterColumn';

// Scss
import '../../styles/components/footer.scss';

const Reviews = () => (
    <footer id="footer" className="section section--gradient__6">
        <Container>
            <Preamble light title={SITE_NAME}>
                We offer highly secure, (Dedicated or Shared) SOCKSv5 and Proxies.
            </Preamble>
            <Row>
                <FooterColumn
                    title="Our products"
                    links={[
                        'HTTP Proxy',
                        'HTTP Proxy',
                        'Dedicated Proxy',
                        'Shared Proxy'
                    ]}
                />
                <FooterColumn
                    title="Resources"
                    links={[
                        'Features',
                        'Privacy policy',
                        'Terms of Service',
                        'Refunds',
                        'Restrictions'
                    ]}
                />
                <FooterColumn
                    title="Support"
                    links={[
                        'Contact Us',
                        'Live Chat',
                    ]}
                />
                <img src="http://via.placeholder.com/350x150" alt="" className="footer__logo" />
            </Row>
        </Container>
    </footer>
);

export default Reviews;
