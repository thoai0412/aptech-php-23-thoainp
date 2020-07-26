import React from 'react';
import { connect } from 'react-redux';
import { tagsFetchStart } from '../../../../../../../../store/actions/tags.action';
class index extends React.Component {
  componentDidMount() {
    if (this.props.tags.length === 0) {
      this.props.fetchStart();
    }
  }
  render() {
    return (
      <div className="my-3 border-bottom">
        <h3>Tags</h3>
        <div className="">
          {this.props.tags &&
            Object.keys(this.props.tags)
              .slice(0, 30)
              .map((key, index) => {
                const tag = this.props.tags[key];
                return (
                  <a className="mx-1 badge badge-primary text-light" key={key}>
                    {tag.name}
                  </a>
                );
              })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tags: state.tags.current
  };
};
const mapDispatchToProps = dispatch => ({
  fetchStart: _ => dispatch(tagsFetchStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
