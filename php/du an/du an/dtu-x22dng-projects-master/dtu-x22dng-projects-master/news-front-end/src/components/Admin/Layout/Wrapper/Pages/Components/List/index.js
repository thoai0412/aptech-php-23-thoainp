import React from 'react';

import { ADMIN_PAGES_NAME } from '../../../../../../../helpers/constants';
import CategoryList from './Category';
import PostList from './Post';
import UserList from './User';

const index = props => {
  const renderList = page => {
    switch (page) {
      case ADMIN_PAGES_NAME.CATEGORIES:
        return (
          <CategoryList
            {...props}
            onButtonDeleteClicked={props.onButtonDeleteClicked}
            onButtonEditClicked={props.onButtonEditClicked}
          />
        );
      case ADMIN_PAGES_NAME.POSTS:
        return (
          <PostList
            {...props}
            onButtonDeleteClicked={props.onButtonDeleteClicked}
            onButtonEditClicked={props.onButtonEditClicked}
          />
        );
      case ADMIN_PAGES_NAME.USERS:
        return (
          <UserList
            {...props}
            onButtonDeleteClicked={props.onButtonDeleteClicked}
            onButtonEditClicked={props.onButtonEditClicked}
            onButtonDeletePermanentlyClicked={
              props.onButtonDeletePermanentlyClicked
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <li
      className={[
        'Admin__Wrapper__List d-flex flex-row justify-content-around border ',
        props.last ? 'border-bottom' : 'border-bottom-0',
        props.className
      ].join(' ')}
    >
      {renderList(props.page)}
    </li>
  );
};

export default index;
