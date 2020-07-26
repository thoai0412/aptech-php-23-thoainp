import React from 'react';

const Button = props => {
  return (
    <button
      disabled={props.disabled}
      type={props.type || 'button'}
      className={['btn rounded-0', props.className].join(' ')}
      onClick={props.clicked}
    >
      <span className="text-uppercase">{props.children}</span>
    </button>
  );
};

export default Button;
