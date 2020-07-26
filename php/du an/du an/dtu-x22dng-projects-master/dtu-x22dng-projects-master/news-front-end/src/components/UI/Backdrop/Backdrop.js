import React from 'react';
import './Backdrop.css';
const Backdrop = props => {
  return props.loading ? (
    <div className="Backdrop d-flex justify-content-center align-items-center">
      {props.children}
    </div>
  ) : null;
};

export default Backdrop;
