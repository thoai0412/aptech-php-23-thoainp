import React from 'react';
import footerImage from '../../../../assets/images/footer/footer_slide-1.png';

import Button from '../../../Details/Button';
import Brand from '../../../UI/Brand';
import { connect } from 'react-redux';
const index = props => {
  return (
    <div className="container-fluid border-top my-2 px-5 bg-light">
      <div className="d-flex flex-row mt-2">
        <div className="col-10 col-md-6">
          <div className="h4 text-uppercase">
            website chia sẻ và hướng dẫn học lập trình
          </div>
        </div>
        <div className="col-md-3 d-none d-md-block " />
        <div className="col-2 col-md-3 " />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    information: state.information
  };
};

export default connect(mapStateToProps)(index);
