import React from 'react';
import { Link } from "gatsby"

// Components
import {
    Col
} from 'reactstrap';

interface Link {
    label: string,
    url: string
}

interface Props {
    links: Array<Link>,
    title: string
}

const FooterColumn: React.FunctionComponent<Props> = ({ title, links }) => (
    <Col md={{ size: 4 }} className="footer__column">
        <h5>{title}</h5>
        <ul>
            {links.map((link, index) => (
                <li key={index}>
                    <Link to={link.url}>{link.label}</Link>
                </li>
            ))}
        </ul>
    </Col>
);

export default FooterColumn;
