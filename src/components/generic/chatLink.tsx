import React from 'react';
import {connect} from 'react-redux';
import getScript from 'scriptjs';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment} from '@fortawesome/free-solid-svg-icons';

// Constants
import { TAWK_TO_WIDGET_URL } from '../../settings';

// Utils
import get from 'lodash/get';

// Actions
import { setTawkToScriptLoaded, setTawkToStatus } from '../../actions';

interface Props {
	doSetTawkToScriptLoaded(): void,
	doSetTawkToStatus(status: string): void,
	tawkToScriptLoaded: boolean,
	tawkToStatus: string,
	hasIcon: boolean
}

interface State {

}

class ChatLink extends React.Component<Props, State> {
	componentDidMount() {
		const { doSetTawkToScriptLoaded, tawkToScriptLoaded, doSetTawkToStatus } = this.props;

		if (!tawkToScriptLoaded) {
			window.Tawk_API = window.Tawk_API || {};
			window.Tawk_API.onStatusChange = function(status) {
				doSetTawkToStatus(status);
			};

			getScript(TAWK_TO_WIDGET_URL, () => {
				doSetTawkToScriptLoaded();
			});
		}
	}

	render() {
		const { hasIcon = false, tawkToStatus } = this.props;

		return (
			<a className="chat-link" onClick={() => { Tawk_API.toggle() }}>
                {hasIcon && <FontAwesomeIcon icon={faComment} className="mr-2" /> }
				{`Live Chat${tawkToStatus ? ` (${tawkToStatus})` : '' }`}
			</a>
		);
	}
}

const mapStateToProps = (state) => ({
	tawkToScriptLoaded: get(state, 'core.tawkToScriptLoaded', {}),
	tawkToStatus: get(state, 'core.tawkToStatus', ''),
});

const mapDispatchToProps = (dispatch) => ({
	doSetTawkToScriptLoaded: () => dispatch(setTawkToScriptLoaded()),
	doSetTawkToStatus: (status: string) => dispatch(setTawkToStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatLink);
