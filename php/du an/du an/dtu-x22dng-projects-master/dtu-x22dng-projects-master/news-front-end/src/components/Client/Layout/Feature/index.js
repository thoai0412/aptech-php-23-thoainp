import React from 'react';
import signUpPositionImage from '../../../../assets/images/feature/getting-started/signup_1.jpg';
import signUpFormImage from '../../../../assets/images/feature/getting-started/signup_2_c.jpg';
import czNewSystemImage from '../../../../assets/images/feature/getting-started/CZ-new-system-.jpg';
import czMainPageImage from '../../../../assets/images/feature/getting-started/Crashzone-main-page.jpg';
import czDetailsPageImage from '../../../../assets/images/feature/getting-started/Crashzone-details-page.jpg';
import czQuotePageImage from '../../../../assets/images/feature/getting-started/Crashzone-quote-page.jpg';
import czViewPageImage from '../../../../assets/images/feature/getting-started/Crashzone-view-page.jpg';
import czIPhoneImage from '../../../../assets/images/feature/getting-started/iPhoneCZ1.jpg';
import czUsingIpadImage from '../../../../assets/images/feature/getting-started/cz-using-ipad.jpg';
import czUsingIpadMiniImage from '../../../../assets/images/feature/getting-started/iPad-mini.jpg';
import cmccDocument from '../../../../assets/documents/Crashzone-Membership-Code-of-Conduct-20141.pdf';
// import './styles.css';
const index = () => {
  return (
    <div className="container py-5 Client__Feature">
      <div className="row">
        <div className="col-12 mb-5">
          <div className="text-center text-uppercase h1 font-weight-bold Client__Feature__Text">
            what is crashzone ?
          </div>
        </div>
      </div>
      <div className="row">
        <ul
          className="nav nav-tabs border-0 flex-column col-lg-4 col-md-4 col-sm-4"
          id="featureTab"
          role="tablist"
        >
          <li className="nav-item mb-3 text-left">
            <a
              className="nav-link text-uppercase Client__Feature__list__anchor active"
              id="crashzone-system-tab"
              data-toggle="tab"
              href="#crashzone-system"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              The Crashzone System
            </a>
          </li>
          <li className="nav-item mb-3 text-left">
            <a
              className="nav-link text-uppercase Client__Feature__list__anchor"
              id="insurance-tab"
              data-toggle="tab"
              href="#insurance"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Insurance Integration
            </a>
          </li>
          <li className="nav-item mb-3 text-left">
            <a
              className="nav-link text-uppercase Client__Feature__list__anchor"
              id="feature-tab"
              data-toggle="tab"
              href="#getting-started"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Getting Started
            </a>
          </li>
          <li className="nav-item mb-3 text-left">
            <a
              className="nav-link text-uppercase Client__Feature__list__anchor"
              id="ccrn-tab"
              data-toggle="tab"
              href="#ccrn"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              ccrn
            </a>
          </li>
        </ul>

        <div className="tab-content col-lg-8 col-md-8 col-sm-8">
          <div
            className="tab-pane fade show active"
            id="crashzone-system"
            role="tabpanel"
            aria-labelledby="crashzone-system-tab"
          >
            <h3 className="text-uppercase">the crashzone system</h3>
            <p>
              Crashzone is a web based quoting system for Smash Repairers
              accessed by secure login using a user name and password ( the same
              as internet banking )
            </p>
            <p>
              Being web based allows you to access Crashzone from any computer,
              laptop, note book or mobile device that has internet access. This
              allows you to use technology such as the Apple iPad, iPhone and
              Android devices . Fast and simple to use, writes quotes, add
              images, create tax and excess invoices, email and print your
              quote. Crashzone is accepted by all insurance companies.
            </p>
            <p>
              Crashzone has been 100% FREE since 2007 we don’t charge you
              anything and there are no catches. There are no support fees or
              extra modules to buy, everything is included such as integration
              with Audatex, ORM, PNET, AutoIntegrity, ARNIE & Estimage
            </p>
            <p>
              Crashzone has over 1000 users in Australia and New Zealand and
              combined our users are generating 250,000 + quotes with a value in
              excess of $500,000,000 (half a billion dollars) annually.
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="insurance"
            role="tabpanel"
            aria-labelledby="insurance-tab"
          >
            <h3 className="text-uppercase">insurance integration</h3>
            <p>
              Crashzone is compaitable with all insurance companies and has
              integration with Audatex, PNET, ORM, NTAR, LTAR, AutoIntegrity,
              Estimage & ARNIE.
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="getting-started"
            role="tabpanel"
            aria-labelledby="feature-tab"
          >
            <h3 className="text-uppercase">getting started</h3>
            <p>
              &#x02010; Create your own no obligation Crashzone system by
              following step :
            </p>
            <ol className="Client__Feature__getting-started__list">
              <li>
                On the top right of the page click the SIGN UP button, a sign up
                form will be appear:
                <img
                  className="img-fluid"
                  src={signUpPositionImage}
                  alt="sign-up-position"
                />
              </li>

              <li>
                <ul>
                  <li>Enter your email address</li>
                  <li>
                    Enter your name ( this help us know who to speak to if you
                    need support )
                  </li>
                  <li>Enter your password ( don’t make it to easy )</li>
                  <li>Repeat the password for confirmation</li>
                  <li>Click on sign up</li>
                  <li>You will now be taken into a new live system</li>
                </ul>
                <img
                  className="img-fluid"
                  src={signUpFormImage}
                  alt="sign-up-form"
                />
                <div className="font-italic pl-3">
                  <span className="text-danger font-weight-bold">
                    Note :&nbsp;
                  </span>
                  <span>
                    If you receive an error when trying to sign up a new account{' '}
                    <strong>“user name not available”</strong>. This indicates
                    that the account already exists within Crashzone, either
                    trying logging into Crashzone or contact Crashzone support.
                  </span>
                </div>
              </li>

              <li>
                Once you sign up you will be taken to the main page of your new
                system
                <a href={czNewSystemImage} target="_blank">
                  <img
                    className="img-fluid"
                    title="Crashzone main page new system"
                    src={czNewSystemImage}
                    alt="cz-new-system"
                  />
                </a>
                <ul>
                  <li>
                    Your newly created Crashzone system is live and ready to use
                  </li>
                  <li>
                    By default we add 1 demo job for example ( Kate Jones )
                  </li>
                  <li>
                    Please use the demo job to familiarise yourself with the
                    Crashzone system
                  </li>
                </ul>
              </li>
            </ol>
            <hr />

            <h3>Frequently asked questions</h3>
            <ol className="Client__Feature__getting-started__list">
              <li>
                <strong>Q</strong>. Is Crashzone owned by an insurance company?
                <br />
                <strong>A</strong>. Crashzone is not owned or affiliated to any
                insurance company we are 100% privately owned propriety limited
                company
              </li>
              <li>
                <strong>Q</strong>. Does Crashzone sell my customer data?
                <br />
                <strong>A</strong>. Your privacy is of the up most importance,
                personal information and customer details are not for sale your
                information is secure on Crashzone
              </li>
              <li>
                <strong>Q</strong>. Can I download Crashzone on to my computer?
                <br />
                <strong>A</strong>. Crashzone is web based; you don’t need to
                download any software. To use Crashzone go to&nbsp;
                <a href="http://www.crashzone.com.au/">www.crashzone.com.au</a>
                &nbsp;and login using your email address and password.
              </li>
              <li>
                <strong>Q</strong>. Can I backup my quotes with Crashzone?
                <br />
                <strong>A</strong>. YES you can backup quotes as often as you
                like from the Crashzone settings page. The Backup data is
                produced in PDF and JPG format so you can use it on any computer
                no need for special software.
              </li>
            </ol>
            <hr />
            <ul className="Client__Feature__getting-started__list list-unstyled">
              <li>
                <strong>&#x02010; Crashzone main page</strong>
                <a href={czMainPageImage} target="_blank">
                  <img
                    className="img-fluid"
                    title="Crashzone main page"
                    src={czMainPageImage}
                    alt="crashzone-main-page"
                  />
                </a>
              </li>

              <li>
                <strong>&#x02010; Crashzone details page</strong>
                <a href={czDetailsPageImage} target="_blank">
                  <img
                    className="img-fluid"
                    title="Crashzone details page"
                    src={czDetailsPageImage}
                    alt="crashzone-details-page"
                  />
                </a>
              </li>

              <li>
                <strong>&#x02010; Crashzone quote page</strong>
                <a href={czQuotePageImage} target="_blank">
                  <img
                    className="img-fluid"
                    title="Crashzone quote page"
                    src={czQuotePageImage}
                    alt="crashzone-quote-page"
                  />
                </a>
              </li>

              <li>
                <strong>&#x02010; Crashzone view page</strong>
                <a href={czViewPageImage} target="_blank">
                  <img
                    className="img-fluid"
                    title="Crashzone view page"
                    src={czViewPageImage}
                    alt="crashzone-view-page"
                  />
                </a>
              </li>
              <li>
                <strong>
                  &#x02010; Crashzone photo App running on Apple iPhone
                </strong>
                <a href={czIPhoneImage} target="_blank">
                  <img
                    className="img-fluid"
                    title="Crashzone on iPhone "
                    src={czIPhoneImage}
                    alt="crashzone-iphone"
                  />
                </a>
              </li>
              <li>
                <strong>&#x02010; Crashzone running on Apple iPad</strong>
                <a href={czUsingIpadImage} target="_blank">
                  <img
                    className="img-fluid"
                    title="cz-using-ipad"
                    src={czUsingIpadImage}
                    alt="crashzone-using-ipad"
                  />
                </a>
              </li>
              <li>
                <strong>&#x02010; Crashzone running on Apple iPad mini</strong>
                <a href={czUsingIpadMiniImage} target="_blank">
                  <img
                    className="img-fluid"
                    title="iPad-mini"
                    src={czUsingIpadMiniImage}
                    alt="crashzone-using-ipad-mini"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div
            className="tab-pane fade"
            id="ccrn"
            role="tabpanel"
            aria-labelledby="ccrn-tab"
          >
            <h3 className="text-uppercase">
              Crashzone Community Repairer Network
            </h3>
            <p>
              As the smash repair industry rocks with the waves of change
              created from the PSR networks and establishment of larges MSO’s,
              &nbsp;one new network has arisen that puts the local community at
              the top of its work providers. Crashzones&nbsp;
              <strong>
                <em>“Community Repairer Network”</em>
              </strong>
              &nbsp;(
              <strong>C&nbsp; CRN</strong>) will provide via its 200 strong
              members just what it’s name suggests, an &nbsp;Australia wide
              community of repairers with a common goal of repairing damaged
              vehicles to standards that are allied with the community’s
              expectations.
            </p>
            <p>
              Through alliances will provide technical data suppliers and
              equipment manufacturers CRN will share knowledge and expertise as
              well as work contacts to put back into the repair industry what
              has been lost to the peak bodies in recent times. No repair shop
              is too big and none too small to be part of the C CRN although the
              one common thread and prerequisite to be a member is the use of
              the Crashzone’s online quoting system.&nbsp; Crashzone has grown
              its software users in every state of Australia (and elsewhere) to
              over 600 over a relatively short period and with numbers like that
              it’s not hard to see why suppliers and work providers alike are
              keen to talk about the future.
            </p>
            <p>
              The executive team of 5 are all from different States and have
              extensive knowledge in their region’s and have made it perfectly
              clear that, just like its members, the Crashzone Community
              Repairer Network they will hold its core values of honesty and
              intergrity above all else and no shop will be larger than the
              group. A code of conduct has been written and posted on the
              website for review by members and non members www.crashzone.com.au
            </p>
            <p>
              The local charities and sporting clubs of the member repairers
              will also be the winners, as it will be encouraged and advertised
              when repairers are giving back to the community in any way. Watch
              this space for more news as the group gains momentum to effect
              positive change to the industry.
            </p>
            <p>
              For clarity, the Community Repairer Network executive are focused
              on the controlling the controllable. It’s charter does not include
              matters/ topics that are already supplied by MTA’s or other
              governing bodies.
            </p>
            <p>
              If you would like to become a member just log on to
              www.crashzone.com.au and express your interest. Best of all is
              Crashzone Quoting is Free.
            </p>
            <p>
              Membership of the Communtiy Repairer Network (an additional
              service for Crashzone users) is provided for a small membership
              fee.
            </p>
            <p>
              <strong>
                <a href={cmccDocument} target="_blank">
                  CCRN – Code Of Conduct
                </a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
