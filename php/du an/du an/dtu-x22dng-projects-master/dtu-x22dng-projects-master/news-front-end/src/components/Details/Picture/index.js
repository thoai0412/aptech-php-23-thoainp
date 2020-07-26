import React from 'react';

const index = props => {
  return (
    // <picture className="d-flex align-items-center">
    <img
      src={props.src}
      alt={props.alt}
      className={props.className}
      width={props.width}
      height={props.height}
    />
    // </picture>
  );
};

export default index;
