import React from 'react';
import { CLIENT_PAGES_NAME } from '../../../../helpers/constants';
import Home from './Pages/Home';
import Blog from './Pages/Blog';

import Contact from './Pages/Contact';
import Help from './Pages/Help';
import Post from './Pages/Post';

class index extends React.Component {
  clientPageRender = props => {
    switch (props.page.toLowerCase()) {
      case CLIENT_PAGES_NAME.HOME:
        return (
          <Home
            onButtonLogInClicked={props.onButtonLogInClicked}
            onButtonSignUpClicked={props.onButtonSignUpClicked}
            isScroll={props.isScroll}
          />
        );
      case CLIENT_PAGES_NAME.BLOG:
        return <Blog onButtonSignUpClicked={props.onButtonSignUpClicked} />;
      case CLIENT_PAGES_NAME.CONTACT:
        return <Contact />;
      case CLIENT_PAGES_NAME.HELP:
        return <Help />;
      case CLIENT_PAGES_NAME.POST:
        return <Post className={props.className} slug={props.slug} />;
      case CLIENT_PAGES_NAME.CATEGORY:
        return <Blog categorySlug={props.categorySlug} />;
      default:
        return null;
    }
  };

  render() {
    return this.clientPageRender(this.props);
  }
}

export default index;
