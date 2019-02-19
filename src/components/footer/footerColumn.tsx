import React from 'react';
import { Link } from "gatsby"

// Components
import {
    Col
} from 'reactstrap';

interface Link {
    label: string,
    url: string,
    children: any,
	native: boolean
}

interface Props {
    links: Array<Link>,
    title: string
}

const FooterColumn: React.FunctionComponent<Props> = ({ title, links, children }) => (
    <Col md={{ size: 4 }} className="footer__column">
        <h5>{title}</h5>
        {children || (
			<ul>
				{links.map(({ url, label, native }, index) => (
					<li key={index}>
                        {
							native ? (
                                <a href={url}>
                                    {label}
                                </a>
                            ) : (
                                <Link to={url}>
                                    {label}
                                </Link>
                            )
                        }

					</li>
				))}
			</ul>
        )}

    </Col>
);

export default FooterColumn;
