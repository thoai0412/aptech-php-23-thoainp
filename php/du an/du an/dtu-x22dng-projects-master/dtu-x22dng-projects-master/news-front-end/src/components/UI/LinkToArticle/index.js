import React from 'react';
import { hrefArticle } from '../../../helpers';

const index = props => {
  return (
    <a href={hrefArticle(props.slug)} className={props.className}>
      {props.children}
    </a>
  );
};

export default index;
