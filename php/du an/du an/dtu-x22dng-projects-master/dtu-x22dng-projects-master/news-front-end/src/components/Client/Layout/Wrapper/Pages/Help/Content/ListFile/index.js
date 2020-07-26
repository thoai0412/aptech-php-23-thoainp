import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const index = props => {
  return (
    <li>
      <a target="_blank" href={props.link}>
        <FontAwesomeIcon icon="file-pdf" className="fa-xs" />&nbsp;
        {props.children}
      </a>
    </li>
  );
};

export default index;
