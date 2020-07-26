import React from 'react';

const index = props => {
  return (
    <div className={[props.className, 'px-0'].join(' ')}>{props.children}</div>
  );
};

export default index;
