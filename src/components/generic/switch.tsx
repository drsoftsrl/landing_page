import React from 'react';

// Styling
import styles from '../../styles/components/generic/switch.module.scss';

interface Props {
	options: {
		[key: string]: any
	},
	onChange(value: string): void,
	selectedOption: string,
	labelField?: string,
	valueField?: string
}

interface State {

}

class Switch extends React.Component<Props, State> {
	onOptionClick(opt: string) {
		this.props.onChange(opt);
	}

	render() {
		const { options, selectedOption, displayField, valueField } = this.props;


		return options.length ? (
			<ul className={styles.list}>
				{
					options.map((opt, index) => (
						<li
                            key={index}
							onClick={this.onOptionClick.bind(this, opt[valueField])}
							className={selectedOption === opt[valueField] ? styles.selected : null}
						>
							{opt[displayField]}
						</li>
					))
				}
			</ul>
		) : null;
	}
}

Switch.defaultProps = {
	displayField: 'label',
	valueField: 'value'
};

export default Switch;

