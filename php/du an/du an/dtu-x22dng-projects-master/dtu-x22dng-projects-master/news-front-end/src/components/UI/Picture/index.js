import React from 'react';

const index = props => {
  return (
    <picture>
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={props.className}
      />
    </picture>
  );
};

export default index;
