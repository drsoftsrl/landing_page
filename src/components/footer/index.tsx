import React from 'react';

// Constants
import { SITE_NAME } from '../../constants';

// Components
import {
    Container,
    Row
} from 'reactstrap';
import Preamble from '../generic/preamble';
import FooterColumn from './footerColumn';
import { Link } from 'react-scroll';
import ChatLink from '../generic/chatLink';

// Constants
import {
    HTTPS_PROXY_ROUTE,
	SOCKS_PROXY_ROUTE,
	DEDICATED_PROXY_ROUTE,
	SHARED_PROXY_ROUTE,
	TOS_ROUTE,
	REFUNDS_ROUTE,
	PRIVACY_ROUTE,
	SCROLL_SUPPORT
} from '../../constants';

// Scss
import '../../styles/components/footer.scss';
import Refunds from '../../pages/refunds';

const Reviews = () => (
    <footer className="footer section section--gradient__6">
        <Container>
            <Preamble light title={SITE_NAME}>
                We offer highly secure, (Dedicated or Shared) SOCKSv5 and Proxies.
            </Preamble>
            <Row>
                <FooterColumn
                    title="Our products"
                    links={[
                        {
                            label: 'HTTP Proxy',
                            url: HTTPS_PROXY_ROUTE
                        }, {
                            label: 'SOCKSv5 Proxy',
                            url: SOCKS_PROXY_ROUTE
                        }, {
                            label: 'Dedicated Proxy',
                            url: DEDICATED_PROXY_ROUTE
                        }, {
                            label: 'Shared Proxy',
                            url: SHARED_PROXY_ROUTE
                        }
                    ]}
                />
                <FooterColumn
                    title="Resources"
                    links={[{
							label: 'Privacy policy',
							url: PRIVACY_ROUTE
						}, {
							label: 'Terms of Service',
							url: TOS_ROUTE
						}, {
							label: 'Refunds',
							url: REFUNDS_ROUTE
						}, {
							label: 'Restrictions',
							url: REFUNDS_ROUTE
						}
                    ]}
                />
				<FooterColumn title="Support">
					<ul>
						<li className="link">
							<Link to={SCROLL_SUPPORT} smooth offset={-85}>
								Contact Us
							</Link>
						</li>
						<li className="link">
							<ChatLink />
						</li>
					</ul>
				</FooterColumn>
                <img src="http://via.placeholder.com/350x150" alt="" className="footer__logo" />
            </Row>
        </Container>
    </footer>
);

export default Reviews;
