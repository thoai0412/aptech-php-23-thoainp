import React from 'react';

const index = props => {
  return (
    <small
      className={['btn btn-link', props.className].join(' ')}
      onClick={props.clicked}
    >
      {props.children}
    </small>
  );
};

export default index;
