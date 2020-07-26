import React from 'react';
import { ADMIN_PAGES_NAME } from '../../../../../../../helpers/constants';
import CategoryHeader from './Category';
import PostHeader from './Post';
import UserHeader from './User';

const Header = props => {
  const renderHeaderList = page => {
    switch (page) {
      case ADMIN_PAGES_NAME.CATEGORIES:
        return <CategoryHeader className={props.className} />;
      case ADMIN_PAGES_NAME.POSTS:
        return <PostHeader className={props.className} />;
      case ADMIN_PAGES_NAME.USERS:
        return <UserHeader className={props.className} />;
      default:
        return null;
    }
  };

  return (
    <li
      className={[
        'Admin__Wrapper__List',
        'Admin__Wrapper__List__Header',
        'd-flex flex-row justify-content-around border bg-light',
        props.className
      ].join(' ')}
    >
      {renderHeaderList(props.page)}
    </li>
  );
};

export default Header;
