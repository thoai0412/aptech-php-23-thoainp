import React from 'react';

import './styles.css';
import { ADMIN_PAGES_NAME } from '../../../../../../../helpers/constants';
import CategoryList from './Category';
const index = props => {
  const renderList = page => {
    switch (page) {
      case ADMIN_PAGES_NAME.CATEGORIES:
        return (
          <CategoryList
            {...props}
            onButtonDeletePermanentlyClicked={
              props.onButtonDeletePermanentlyClicked
            }
            onButtonRetoreClicked={props.onButtonRetoreClicked}
          />
        );
      default:
        return null;
    }
  };
  return renderList(props.page);
};

export default index;
