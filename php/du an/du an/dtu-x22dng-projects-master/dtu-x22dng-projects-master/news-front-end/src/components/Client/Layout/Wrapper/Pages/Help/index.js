import React, { Fragment } from 'react';
import Banner from '../../../Banner';

import HelpContent from './Content';
import helpImage from '../../../../../../assets/images/help/help-1.jpg';
const index = () => {
  return (
    <Fragment>
      <Banner bannerImage={helpImage} title="help" />

      <HelpContent />
    </Fragment>
  );
};

export default index;
