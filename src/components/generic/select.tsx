import React from 'react';

// Components
import Select from 'react-select';

// SCSS
import '../../styles/components/generic/reactSelect.scss';

interface Props {
    value: object,
    options: Array<object>,
    onChange(): void,
	other: any
}

const CustomSelect: React.FunctionComponent<Props> = ({ value, options, onChange, ...other }) => (
	<Select
		value={value}
		options={options}
		onChange={onChange}
		className='react-select'
		classNamePrefix="react-select"
		{...other}
	/>
);

export default CustomSelect;
