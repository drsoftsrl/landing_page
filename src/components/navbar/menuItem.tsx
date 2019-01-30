import React from 'react';

// Components
import {
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-scroll';

interface Props {
    scrollComponent: any,
    text: string
}

const MenuItem: React.FunctionComponent<Props> = ({ scrollComponent, text }) => (
  <NavItem>
    <Link to={scrollComponent} smooth offset={-85}>
      <NavLink tag="div" className="text-uppercase">
          {text}
      </NavLink>
    </Link>
  </NavItem>
);

export default MenuItem;
