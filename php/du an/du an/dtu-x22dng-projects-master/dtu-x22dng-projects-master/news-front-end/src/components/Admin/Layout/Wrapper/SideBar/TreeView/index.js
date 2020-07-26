import React from 'react';
import Icon from '../../../../../UI/Icon';
import { iconClass } from '../../../../../../helpers';
import Text from '../../../../../UI/Text';
import { NavLink } from 'react-router-dom';
import './styles.css';
const index = props => {
  return (
    <li className="Tree-View border-bottom p-3">
      <NavLink
        to={props.to}
        className="d-flex align-items-center text-white"
        activeClassName="active"
      >
        <Icon iconClass={iconClass(props.iconType)} className="text-white" />
        <Text className="px-2">{props.text}</Text>
      </NavLink>
    </li>
  );
};

export default index;
