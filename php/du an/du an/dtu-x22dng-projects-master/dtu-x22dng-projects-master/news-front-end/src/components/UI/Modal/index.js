import React, { Fragment, Component } from 'react';
import './styles.css';
import Backdrop from '../Backdrop/Backdrop';
import Spinner from '../Spinner';
import Error from '../Error/Error';
class Modal extends Component {
  constructor(props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.loading !== this.props.loading ||
      nextProps.children !== this.props.children
    );
  }
  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.props.modalClosed();
    }
  }

  render() {
    return (
      <Fragment>
        <Backdrop loading={this.props.loading}>
          {this.props.spinner && <Spinner />}
          {this.props.error && (
            <Error clicked={this.props.modalClosed} error={this.props.error} />
          )}
        </Backdrop>
      </Fragment>
    );
  }
}

export default Modal;
