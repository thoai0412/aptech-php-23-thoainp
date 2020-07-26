import React from 'react';

const index = props => {
  return (
    <li className={['page-item', props.className].join(' ')}>
      <a className="page-link" onClick={props.clicked}>
        {props.children}
      </a>
    </li>
  );
};

export default index;
