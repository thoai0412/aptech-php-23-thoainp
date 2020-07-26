import React from 'react';

const index = props => {
  return (
    <div className={['container', props.className].join(' ')}>
      {props.children}
    </div>
  );
};

export default index;
