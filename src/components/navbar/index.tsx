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

// Scss
import '../../styles/components/navbar.scss';

// Utils
import classnames from 'classnames';

interface Props {

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

    handleScroll() {
        this.setState({
            scrollY: window.document.documentElement.scrollTop
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    toggleNav() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

	render() {
        const { scrollY } = this.state;
        const navClasses = classnames("justify-content-center", scrollY > 250 ? "top-fixed" : "");

        return (
            <Navbar expand="lg" light className={navClasses}>
                <Container>
                    <NavbarBrand href="/">
                        <img src="http://via.placeholder.com/600x332" alt="Logo" className="light" />
                        <img src="http://via.placeholder.com/600x332" alt="Logo" className="dark" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mx-auto fill-flex justify-content-center" navbar>
                            <NavItem>
                                <NavLink href="/" className="text-uppercase">Pricing</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/" className="text-uppercase">Features</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/" className="text-uppercase">Datacenters</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/" className="text-uppercase">Support</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto justify-content-end align-items-start align-items-lg-center" navbar>
                            <NavItem>
                                <NavLink href="/" className="text-uppercase nav-link__cta rounded">Buy now</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
	}
}

export default NavBar;
