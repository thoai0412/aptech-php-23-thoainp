import { Router, Switch, Route, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import React, { Component } from 'react';
import PublicRoute from '../Routes/PublicRoute';
import PrivateRoute from '../Routes/PrivateRoute';
import Post from '../../containers/Client/Post';

/* CLIENT */
import Home from '../../containers/Client/Home';
import Blog from '../../containers/Client/Blog';
import Category from '../../containers/Client/Category';
import Contact from '../../containers/Client/Contact';
import Help from '../../containers/Client/Help';

import NotFoundPage from '../../containers/404';

/*Admin*/
import Login from '../../containers/Admin/Login';
import Users from '../../containers/Admin/Users';
import Categories from '../../containers/Admin/Categories';
import Posts from '../../containers/Admin/Posts';
import Dashboard from '../../containers/Admin/Dashboard';

export const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/404" component={NotFoundPage} />
          <Route path="/blog" exact component={Blog} />
          <Route
            path="/blog/categories/:categorySlug"
            exact
            component={Category}
          />
          <Route path="/blog/posts/:slug" component={Post} />
          <Route path="/contact" component={Contact} />
          <Route path="/help" component={Help} />
          <PublicRoute path="/admin/login" component={Login} />
          <PrivateRoute path="/admin/dashboard" component={Dashboard} />
          <PrivateRoute path="/admin/users" component={Users} />
          <PrivateRoute path="/admin/categories" component={Categories} />
          <PrivateRoute path="/admin/posts" component={Posts} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
