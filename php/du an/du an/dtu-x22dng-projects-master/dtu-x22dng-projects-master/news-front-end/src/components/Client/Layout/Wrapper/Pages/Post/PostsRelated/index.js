import React from 'react';
import { logoImage } from '../../../../../../../helpers';

const index = props => {
  return (
    // <div className="card-group">
    <div className="card border-0 p-2">
      <img
        className="card-img-top"
        src={logoImage()}
        height="200px"
        alt="Card cap"
      />
      <div className="card-body p-1">
        <h5 className="card-title font-weight-bold">Card title</h5>
        <p className="card-text" style={{ height: '100px' }}>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
    //   <div className="card border-0 p-2">
    //     <img
    //       className="card-img-top"
    //       src={logoImage()}
    //       height="200px"
    //       alt="Card cap"
    //     />
    //     <div className="card-body p-1">
    //       <h5 className="card-title font-weight-bold">Card title</h5>
    //       <p className="card-text" style={{ height: '100px' }}>
    //         This card has supporting text below as a natural lead-in to
    //         additional content.
    //       </p>
    //       <p className="card-text">
    //         <small className="text-muted">Last updated 3 mins ago</small>
    //       </p>
    //     </div>
    //   </div>
    //   <div className="card border-0 p-2">
    //     <img
    //       className="card-img-top"
    //       src={logoImage()}
    //       height="200px"
    //       alt="Card cap"
    //     />
    //     <div className="card-body p-1">
    //       <h5 className="card-title font-weight-bold">Card title</h5>
    //       <p className="card-text" style={{ height: '100px' }}>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This card has even longer content than the
    //         first to show that equal height action.
    //       </p>
    //       <p className="card-text">
    //         <small className="text-muted">Last updated 3 mins ago</small>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default index;
