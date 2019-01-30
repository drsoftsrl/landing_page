import React from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';

// Components
import {
	NavItem,
	NavLink
} from 'reactstrap';

// Actions
import { setScrollElement } from '../../actions';

interface Props {
	scrollComponent: any,
	text: string,
	doSetScrollElement(el: any): void
}

interface State {

}

class MenuItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { doSetScrollElement, scrollComponent } = this.props;

		doSetScrollElement(scrollComponent);
    }

	render() {
        const { text } = this.props;

		return (
			<NavItem>
				<Link to="/" onClick={this.handleClick}>
					<NavLink tag="div" className="text-uppercase">
						{text}
					</NavLink>
				</Link>
			</NavItem>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	doSetScrollElement: (el: any) => dispatch(setScrollElement(el))
});

export default connect(null, mapDispatchToProps)(MenuItem);
