import React from 'react';

// Components
import {
    Col,
    Row
} from 'reactstrap';

// Utils
import classnames from 'classnames';

interface Props {
    light?: boolean,
    title: any,
    children: any,
    secondaryTitle: any
}

const Preamble: React.FunctionComponent<Props> = ({ light = false, title, children, secondaryTitle }) => (
    <Row>
        <Col lg={{ size: 8, offset: 2 }} className={classnames('preamble', light ? 'preamble--light' : '')}>
            <h3 className="title">{title}</h3>
            {secondaryTitle && <h5 className="secondaryTitle">{secondaryTitle}</h5>}
            <div className="lead">{children}</div>
        </Col>
    </Row>
);

export default Preamble;
