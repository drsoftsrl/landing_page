import React from 'react';
import { Link } from 'gatsby';
import { connect } from "react-redux";
import { injectIntl } from "gatsby-plugin-intl";

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
import { Link as ScrollLink } from 'react-scroll';

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
		const { main, intl } = this.props;

		return (
			<footer className="footer section section--gradient__2">
				<Container>
					<Preamble light title={SITE_NAME}>
						{intl.formatMessage({ id: 'site.description' })}
					</Preamble>
					<Row>
						<FooterColumn
							title="Our products"
							links={[
								{
									label: intl.formatMessage({ id: 'services.httpproxy' }),
									url: HTTPS_PROXY_ROUTE
								}, {
									label: intl.formatMessage({ id: 'services.socksv5' }),
									url: SOCKS_PROXY_ROUTE
								}, {
									label: intl.formatMessage({ id: 'services.dedicated' }),
									url: DEDICATED_PROXY_ROUTE
								}, {
									label: intl.formatMessage({ id: 'services.shared' }),
									url: SHARED_PROXY_ROUTE
								}
							]}
						/>
						<FooterColumn
							title="Resources"
							links={[{
								label: intl.formatMessage({ id: 'common.pricing' }),
								url: PRICING_ROUTE
							}, {
								label: intl.formatMessage({ id: 'common.privacy' }),
								url: PRIVACY_ROUTE
							}, {
								label: intl.formatMessage({ id: 'common.terms' }),
								url: TOS_ROUTE
							}, {
								label: intl.formatMessage({ id: 'common.refunds' }),
								url: REFUNDS_ROUTE
							}, {
								label: intl.formatMessage({ id: 'common.restrictions' }),
								url: REFUNDS_ROUTE
							}, {
								label: intl.formatMessage({ id: 'common.members' }),
								url: MEMBERS_URL,
								native: true
							}, {
								label: intl.formatMessage({ id: 'common.sitemap' }),
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
												{intl.formatMessage({ id: 'common.contact' })}
											</ScrollLink>
											) : (
											<Link to="/" onClick={this.handleContactClick}>
												{intl.formatMessage({ id: 'common.contact' })}
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

export default connect(null, mapDispatchToProps)(injectIntl(Reviews));
