import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    data: state.data
  };
};
class Home extends Component {
  render() {
    console.log('store data:', this.props.data);
    return (
        <div>
          <h2>Home</h2>
          <p><i>Home page content here...</i></p>
        </div>
    );
  }
}

export default connect(mapStateToProps)(Home);