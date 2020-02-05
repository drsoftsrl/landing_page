import React from 'react';
import { Link } from 'gatsby';
import { connect } from "react-redux";

// Constants
import { SITE_NAME } from '../../settings';
import footerImage from '../../images/footer.png';

// Components
import {
    Container,
    Row
} from 'reactstrap';
import Preamble from '../generic/preamble';
import FooterColumn from './footerColumn';
import ChatLink from '../generic/chatLink';

// Actions
import { setScrollElement } from '../../actions';

// Scroll
import Scroll, { Link as ScrollLink } from 'react-scroll';

// Constants
import {
    HTTPS_PROXY_ROUTE,
	SOCKS_PROXY_ROUTE,
	DEDICATED_PROXY_ROUTE,
	SHARED_PROXY_ROUTE,
	TOS_ROUTE,
	REFUNDS_ROUTE,
	PRIVACY_ROUTE,
	SITEMAP_ROUTE,
	SCROLL_SUPPORT,
	PRICING_ROUTE
} from '../../constants';
import { MEMBERS_URL } from '../../settings';

// Scss
import '../../styles/components/footer.scss';

interface Props {
	main: boolean,
	doSetScrollElement(el: any): void
}

interface State {

}

class Reviews extends React.Component<Props, State> {
	static defaultProps = {
		main: false
	};

	handleContactClick = () => {
		const { doSetScrollElement } = this.props;
		doSetScrollElement(SCROLL_SUPPORT);
	};

	render() {
		const { main } = this.props;

		return (
			<footer className="footer section section--gradient__2">
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
								label: 'Pricing',
								url: PRICING_ROUTE
							}, {
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
							}, {
								label: 'Members',
								url: MEMBERS_URL,
								native: true
							}
							, {
								label: 'Sitemap',
								url: SITEMAP_ROUTE,
								native: true
							}
							]}
						/>
						<FooterColumn title="Support">
							<ul>
								<li className="link">
									{
										main ? (
											<ScrollLink to={SCROLL_SUPPORT} smooth offset={-85}>
												Contact Us
											</ScrollLink>
											) : (
											<Link to="/" onClick={this.handleContactClick}>
												Contact Us
											</Link>
										)
									}
								</li>
								<li className="link">
									<ChatLink/>
								</li>
							</ul>
						</FooterColumn>
						<img src={footerImage} alt="" className="footer__logo"/>
					</Row>
				</Container>
			</footer>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	doSetScrollElement: (el: any) => dispatch(setScrollElement(el))
});

export default connect(null, mapDispatchToProps)(Reviews);
