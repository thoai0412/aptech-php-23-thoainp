import React from 'react';

const index = props => {
  return (
    <div className={['d-flex flex-row', props.className].join(' ')}>
      {props.children}
    </div>
  );
};

export default index;
