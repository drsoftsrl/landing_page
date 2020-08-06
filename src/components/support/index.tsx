import React from 'react';
import { toast } from 'react-toastify';
import { injectIntl } from "gatsby-plugin-intl";

// Components
import {
	Button,
	Col,
    Container,
    Form,
    FormGroup,
    Input,
	Row
} from 'reactstrap';
import Preamble from '../generic/preamble';
import ChatLink from '../generic/chatLink';

// Scss
import '../../styles/components/support.scss';

// Request
import requestHandler from '../../utils/request';

// Constants
import { SUPPORT_URL } from '../../constants';

interface Props {

}

interface State {
	email: string
	message: string
}

class Support extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			email: '',
			message: ''
		};

		this.handleSendAction = this.handleSendAction.bind(this);
	}

	handleChange(field, e) {
		this.setState({
			[field]: e.target.value
		});
	}

	handleSendAction() {
		const { email, message } = this.state;
		const { intl } = this.props;
		const notifierOptions = {
			position: toast.POSITION.BOTTOM_CENTER
		};

		requestHandler(SUPPORT_URL, {
			method: 'POST',
			body: JSON.stringify({ email, message })
		})
			.then(({ data, error }) => {
				if (error) {
					toast.error(error, notifierOptions);
					return;
				}

				toast.success(intl.formatMessage({ id: 'message.sent' }), notifierOptions);
			})
			.catch((e) => {
				toast.error(intl.formatMessage({ id: 'message.failed' }), notifierOptions);
			});
	}

	render() {
		const { email, message } = this.state;
		const { intl } = this.props;

		return (
			<section className="support section section--gradient__1">
				<Container>
					<Preamble light title={intl.formatMessage({ id: 'common.support' })}>
						{intl.formatMessage({ id: 'support.desc.1' })}
						<br />
						{intl.formatMessage({ id: 'support.desc.2' })}
					</Preamble>

					<div className="support-container text-center">
						<ChatLink />

						<div className="support-separator">{intl.formatMessage({ id: 'common.or' })}</div>
					</div>

					<Form>
						<FormGroup row>
							<Col sm={{ size: 12 }} lg={{ size: 10, offset: 1 }}>
								<Input
									type="email"
									name="email"
									placeholder={intl.formatMessage({ id: 'email.placeholder' })}
									onChange={this.handleChange.bind(this, 'email')}
								/>
							</Col>
						</FormGroup>

						<FormGroup row>
							<Col sm={{ size: 12 }} lg={{ size: 10, offset: 1 }}>
								<Input
									type="textarea"
									name="text"
									placeholder={intl.formatMessage({ id: 'message.placeholder' })}
									onChange={this.handleChange.bind(this, 'message')}
								/>
							</Col>
						</FormGroup>

						<Row>
							<Col sm={{ size: 12 }} lg={{ size: 10, offset: 1 }} className="text-center">
								<Button
									disabled={!email || !message}
									className="btn--green btn--lg"
									onClick={this.handleSendAction}
								>
									{intl.formatMessage({ id: 'send.message' })}
								</Button>
							</Col>
						</Row>
					</Form>
				</Container>
			</section>
		);
	}
}

export default injectIntl(Support);
