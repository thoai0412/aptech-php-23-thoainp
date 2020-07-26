import React, { Fragment } from 'react';
import Categories from '../../Blog/Side/Categories';
import FormLogin from '../../Blog/Side/Form/Login';
import Adv from '../../Blog/Side/Adv';
const index = props => {
  return (
    <Fragment>
      <Adv />
      <FormLogin />
      {props.categories && <Categories postCategories={props.categories} />}
    </Fragment>
  );
};

export default index;
