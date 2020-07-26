import React, { Component } from 'react';

import ContainerFluid from '../../../UI/ContainerFluid';

import Row from '../../../UI/Row';
import SideBar from './SideBar';

import { ADMIN_PAGES_NAME } from '../../../../helpers/constants';
import Users from './Pages/Users';
import Posts from './Pages/Posts';
import Categories from './Pages/Categories';
import NotFoundPage from '../../../../containers/404';
import Dashboard from './Pages/Dashboard';
class index extends Component {
  state = {
    formToggle: false,
    formEditToggle: false
  };

  onFormToggleClickHandler = _ => {
    this.setState(prevState => ({
      formToggle: !prevState.formToggle
    }));
  };

  onFormEditToggleClickHandler = set => {
    this.setState(prevState => ({
      formEditToggle: set === true ? set : !prevState.formEditToggle
    }));
  };

  adminPageRender = page => {
    switch (page.toLowerCase()) {
      case ADMIN_PAGES_NAME.USERS:
        return (
          <Users
            page={this.props.page}
            formToggle={this.state.formToggle}
            onFormToggleClicked={this.onFormToggleClickHandler}
            formEditToggle={this.state.formEditToggle}
            onFormEditToggleClicked={this.onFormEditToggleClickHandler}
          />
        );
      case ADMIN_PAGES_NAME.POSTS:
        return (
          <Posts
            page={this.props.page}
            formToggle={this.state.formToggle}
            onFormToggleClicked={this.onFormToggleClickHandler}
            formEditToggle={this.state.formEditToggle}
            onFormEditToggleClicked={set =>
              this.onFormEditToggleClickHandler(set)
            }
          />
        );
      case ADMIN_PAGES_NAME.CATEGORIES:
        return (
          <Categories
            page={this.props.page}
            formToggle={this.state.formToggle}
            onFormToggleClicked={this.onFormToggleClickHandler}
            formEditToggle={this.state.formEditToggle}
            onFormEditToggleClicked={set =>
              this.onFormEditToggleClickHandler(set)
            }
          />
        );
      case ADMIN_PAGES_NAME.DASHBOARD:
        return <Dashboard page={this.props.page} />;
      default:
        return <NotFoundPage />;
    }
  };
  render() {
    return (
      <ContainerFluid className="px-0 h-100">
        <Row className="h-100">
          <SideBar />
          <div className="col-lg-10 Admin__Wrapper">
            {this.adminPageRender(this.props.page)}
          </div>
        </Row>
      </ContainerFluid>
    );
  }
}

export default index;
