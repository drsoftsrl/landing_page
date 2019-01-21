import React from 'react';

// Components
import {
    Col
} from 'reactstrap';

// Icons
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Props {
    icon: IconDefinition,
    title: any,
    children: any
}

const Feature: React.FunctionComponent<Props> = ({ icon, title, children }) => (
    <Col lg={{ size: 4 }}>
        <div className="feature d-flex">
            <FontAwesomeIcon className="feature__icon icon icon--md mr-4" icon={icon} />
            <div>
                <h5>{title}</h5>
                <p className="pr-4">{children}</p>
            </div>
        </div>
    </Col>
);

export default Feature;
