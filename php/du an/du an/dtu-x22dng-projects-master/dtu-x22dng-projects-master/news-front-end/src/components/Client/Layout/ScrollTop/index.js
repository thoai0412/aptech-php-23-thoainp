import React from 'react';

const index = props => {
  // const scrollStyle = {
  //   position: 'fixed',
  //   bottom: '0',
  //   right: '0'
  // };
  return (
    <div className="fixed-bottom mb-3 mr-3" style={{ left: 'unset' }}>
      <button
        type="button"
        className="btn btn-sm bg-yellow-cz-custom rounded-0"
        onClick={_ => props.clicked()}
      >
        <b>&#10835;</b>
      </button>
    </div>
  );
};

export default index;
