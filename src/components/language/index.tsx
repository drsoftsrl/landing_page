import * as React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const languageName = {
	en: "English",
	ro: "Romana"
};

const Language = () => (
	<div>
		<IntlContextConsumer>
			{({ languages, language: currentLocale }) =>
				languages.map(language => (
					<a
						key={language}
						onClick={() => changeLocale(language)}
						style={{
							color: currentLocale === language ? `blue` : `black`,
							margin: 10,
							textDecoration: `underline`,
							cursor: `pointer`
						}}
					>
						{languageName[language]}
					</a>
				))
			}
		</IntlContextConsumer>
	</div>
)

export default Language;
