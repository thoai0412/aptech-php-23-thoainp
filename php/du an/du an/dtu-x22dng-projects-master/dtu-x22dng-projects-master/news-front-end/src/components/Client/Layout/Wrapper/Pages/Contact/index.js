import React, { Fragment } from 'react';

import contactImage from '../../../../../../assets/images/contact/MenuBanners_Contact-1920x580.jpg';
import Banner from '../../../Banner';
const index = () => {
  return (
    <Fragment>
      <Banner bannerImage={contactImage} title="Contact" />
      <div className="container-fluid Contact-Content px-0">
        <div className="d-flex flex-column flex-md-row h-100">
          <div className="d-none d-md-flex col-md-4 align-items-center h-100 bg-secondary px-0">
            <div className="d-flex flex-column text-white pl-5">
              <h1>Crashzone It’s Free Pty.Ltd</h1>
              <span>
                <i className="fas fa-phone" />
                &nbsp;&#x02010;&nbsp;02 9011 6647
              </span>
              <span>
                <i className="fas fa-envelope" />
                &nbsp;&#x02010;&nbsp;support@crashzone.com.au
              </span>
            </div>
          </div>
          <div className="col-12 col-md-8 py-5">
            <form className="mx-5">
              <h4>Get in touch with us</h4>
              <div className="">
                <p>
                  If you have an enquiry, or would like to speak to us about any
                  aspect of the <strong>Crashzone Software as a Service</strong>{' '}
                  please phone, fax or email your enquiry and a team member will
                  respond to you as soon as possible. Alternatively, you can use
                  the form below to email us and we will get back to you as soon
                  as possible. If you need <strong>Technical Support</strong>,
                  please refer to our <strong>Support</strong> page
                </p>
              </div>
              <div className="form-row">
                <div className="form-group col-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-6">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-6">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-6">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="form-control"
                  />
                </div>

                <div className="col-12 form-group">
                  <textarea
                    name=""
                    id=""
                    placeholder="Your message here...."
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-lg bg-yellow-cz-custom rounded-0 text-uppercase"
                  >
                    send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default index;
