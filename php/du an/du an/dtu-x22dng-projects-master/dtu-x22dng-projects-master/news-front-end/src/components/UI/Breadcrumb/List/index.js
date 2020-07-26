import React from 'react';

const index = props => {
  return (
    <li
      className={[
        'breadcrumb-item text-uppercase',
        props.last ? 'active' : null
      ].join(' ')}
    >
      {props.last ? (
        props.name
      ) : (
        <a href="/blog" className="">
          {props.name}
        </a>
      )}
    </li>
  );
};

export default index;
