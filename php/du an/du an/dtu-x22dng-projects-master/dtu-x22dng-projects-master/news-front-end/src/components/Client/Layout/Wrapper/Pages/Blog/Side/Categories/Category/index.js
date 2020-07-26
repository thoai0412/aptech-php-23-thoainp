import React from 'react';
import Button from '../../../../../../../../UI/Button';
import { NavLink } from 'react-router-dom';

const index = props => {
  return (
    <NavLink to={`/blog/categories/${props.slug}`}>
      <Button className="btn btn-secondary roundex-0 m-2">{`${props.name} (${
        props.posts_count
      })`}</Button>
    </NavLink>
  );
};

export default index;
