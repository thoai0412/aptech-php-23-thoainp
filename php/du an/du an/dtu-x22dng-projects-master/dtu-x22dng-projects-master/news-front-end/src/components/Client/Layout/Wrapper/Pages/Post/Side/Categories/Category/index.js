import React from 'react';
import Button from '../../../../../../../../UI/Button';
const index = props => {
  return (
    <Button className="btn btn-secondary roundex-0 m-2">{`${props.name} (${
      props.posts_count
    })`}</Button>
  );
};

export default index;
