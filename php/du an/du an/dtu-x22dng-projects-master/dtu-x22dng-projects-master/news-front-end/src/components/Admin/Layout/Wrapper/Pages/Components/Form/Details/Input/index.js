import React from 'react';

const index = props => {
  return (
    <input
      id={props.id}
      type={props.type}
      className={['rounded-0', props.className].join(' ')}
      style={props.style}
      placeholder={props.placeholder}
      required={props.required}
      value={props.value}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      autoFocus={props.autoFocus}
      readOnly={props.readOnly}
      aria-describedby={props.ariaDescribedby}
    />
  );
};

export default index;
