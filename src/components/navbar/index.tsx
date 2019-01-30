import React from 'react';

// Components
import {
    Collapse,
	Container,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import ChatLink from '../generic/chatLink';

// Scss
import '../../styles/components/navbar.scss';

// Utils
import classnames from 'classnames';

// Constants
import {
    SCROLL_DATACENTERS,
    SCROLL_FEATURES,
    SCROLL_PRICING,
    SCROLL_SUPPORT,
    SITE_URL
} from '../../constants';

interface Props {
	MenuItem: any
}

interface State {
    isOpen: boolean,
    scrollY: number
}

class NavBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isOpen: false,
            scrollY: 0
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.setState({
            scrollY: window.document.documentElement.scrollTop
        });
    }

    toggleNav() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { scrollY, isOpen } = this.state;
        const { MenuItem } = this.props;
        const navClasses = classnames("justify-content-center", scrollY > 250 ? "top-fixed" : "");

        return (
            <Navbar expand="lg" light className={navClasses}>
                <Container>
                    <NavbarBrand href="/">
                        <img src="http://via.placeholder.com/600x332" alt="Logo" className="light" />
                        <img src="http://via.placeholder.com/600x332" alt="Logo" className="dark" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mx-auto fill-flex justify-content-center text-uppercase" navbar>
                            <MenuItem scrollComponent={SCROLL_PRICING} text="Pricing" />
                            <MenuItem scrollComponent={SCROLL_FEATURES} text="Features" />
                            <MenuItem scrollComponent={SCROLL_DATACENTERS} text="Datacenters" />
                            <MenuItem scrollComponent={SCROLL_SUPPORT} text="Support" />
                        </Nav>
                        <Nav className="ml-auto justify-content-end align-items-start align-items-lg-center" navbar>
                            <NavItem>
                                <NavLink href={SITE_URL} className="text-uppercase nav-link__cta rounded">Buy now</NavLink>
                            </NavItem>
                        </Nav>

						<ChatLink hasIcon />
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;
