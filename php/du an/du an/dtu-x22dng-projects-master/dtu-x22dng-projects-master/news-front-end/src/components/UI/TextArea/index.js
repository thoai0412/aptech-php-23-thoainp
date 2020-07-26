import React from 'react';

const index = props => {
  return (
    <textarea
      className={props.className}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default index;
