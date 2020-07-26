import React from 'react';

const index = props => {
  return (
    <small
      className={[
        'form-text text-muted Help__Text--height',
        props.className
      ].join(' ')}
    >
      {props.children}
    </small>
  );
};

export default index;
