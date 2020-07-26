import React, { Component, Fragment } from 'react';

import Modal from '../../components/UI/Modal';
import Spinner from '../../components/UI/Spinner';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: '',
      loading: null,
      spinner: null
    };

    componentWillMount() {
      this.requestInterceptor = axios.interceptors.request.use(
        request => {
          this.setState(previousState => {
            return {
              loading: previousState.loading + 1,
              spinner: previousState.spinner + 1
            };
          });
          return request;
        },
        error => {
          this.setState(previousState => {
            return {
              error: error,
              spinner: previousState.spinner - 1
            };
          });

          return Promise.reject(error);
        }
      );

      this.responseInterceptor = axios.interceptors.response.use(
        response => {
          this.setState(previousState => {
            return {
              error: null,
              loading: previousState.loading - 1,
              spinner: previousState.spinner - 1
            };
          });

          return response;
        },
        error => {
          this.setState(previousState => {
            return {
              error: previousState.error + error,
              spinner: previousState.spinner - 1
            };
          });
          return Promise.reject(error);
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null, loading: 0 });
    };

    render() {
      return (
        <Fragment>
          <Modal
            loading={this.state.loading > 0}
            spinner={this.state.spinner > 0}
            error={this.state.error !== null && this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.spinner > 0 && <Spinner />}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;
