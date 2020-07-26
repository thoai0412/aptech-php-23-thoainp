import React, { Component } from 'react';

import { connect } from 'react-redux';
import Category from './Category';
class index extends Component {
  // componentDidMount() {
  //   this.props.categoriesFetchStart();
  // }

  render() {
    console.log(this.props.categories);
    return (
      <div className="my-2">
        <h3>Categories</h3>
        {this.props.categories &&
          Object.keys(this.props.categories).map((key, index) => {
            const category = this.props.categories[key];
            return <Category key={category.id} index={++index} {...category} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // categories: state.categories.current
  };
};

const mapDispatchToProps = dispatch => ({
  // categoriesFetchStart: () => dispatch(categoriesFetchStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
