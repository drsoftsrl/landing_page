import React from 'react';

// Components
import {
    Col
} from 'reactstrap';


// Icons
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

interface Props {
    children: any,
    author: string,
    authorDepartment: string
}

const Review: React.FunctionComponent<Props> = ({ children, author, authorDepartment }) => (
    <Col lg={{ size: 4 }} className="review">
        <div className="review__box">
            <div className="pointer" />
            <div className="pointer-border" />
            {children}
        </div>
        <div className="review__author">
            <h5>
                <FontAwesomeIcon icon={faTwitter} />
                {author}
            </h5>
            {authorDepartment}
        </div>
    </Col>
);

export default Review;
