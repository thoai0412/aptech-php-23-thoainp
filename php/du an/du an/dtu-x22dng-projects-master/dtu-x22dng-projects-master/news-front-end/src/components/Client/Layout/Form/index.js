import React from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';
class index extends React.Component {
  componentWillMount() {
    document.addEventListener('keydown', this.onEscapeButton);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscapeButton);
  }

  onEscapeButton = event => {
    if (event.keyCode === 27) {
      this.props.onEscapeButtonPressed();
    }
  };

  render() {
    const form = props => {
      switch (props.type) {
        case 'signup':
          return <SignUp {...props} />;
        case 'login':
          return <LogIn {...props} />;
        default:
          return null;
      }
    };
    return (
      <div
        tabIndex="0"
        className="Client__Form position-fixed d-flex justify-content-center align-items-center "
        onKeyDown={event => this.onEscapeButton(event)}
      >
        {form(this.props)}
      </div>
    );
  }
}

export default index;
