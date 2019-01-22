import React from 'react';

// Components
import {
    Col
} from 'reactstrap';

interface Props {
    links: Array<any>,
    title: string
}

const FooterColumn: React.FunctionComponent<Props> = ({ title, links }) => (
    <Col md={{ size: 4 }} className="footer__column">
        <h5>{title}</h5>
        <ul>
            {links.map((link, index) => (<li key={index}>{link}</li>))}
        </ul>
    </Col>
);

export default FooterColumn;
