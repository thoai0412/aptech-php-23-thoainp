import React from 'react';

import TreeView from './TreeView';
import './styles.css';
import { ADMIN_URL_PAGES } from '../../../../../helpers/constants';

import { fontAwesomeType } from '../../../../../helpers';
const index = props => {
  return (
    <div className="col-lg-2 Side-Bar px-0">
      <ul className="list-unstyled my-0 h-100 bg-secondary position-fixed col-lg-2">
        <TreeView
          iconType={fontAwesomeType.TACHOMETERALT}
          text="Dash Board"
          to={ADMIN_URL_PAGES.DASHBOARD}
        />
        <TreeView iconType="users" text="Users" to={ADMIN_URL_PAGES.USERS} />
        <TreeView
          iconType={fontAwesomeType.THLIST}
          text="Categories"
          to={ADMIN_URL_PAGES.CATEGORIES}
        />
        <TreeView
          iconType={fontAwesomeType.NEWSPAPER}
          text="Posts"
          to={ADMIN_URL_PAGES.POSTS}
        />
      </ul>
    </div>
  );
};

export default index;
