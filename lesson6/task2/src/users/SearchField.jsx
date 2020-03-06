import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userDataSelector } from './users.selectors';
import { onFetchUserData } from './users.actions';

class SearchField extends Component {
  state = {
    userName: ''
  };
  onGetUserName = event =>
    this.setState({ userName: event.target.value });

  render() {
    return (
      <div className="name-form">
        <input onChange={this.onGetUserName} type="text" className="name-form__input" value={this.state.userName} />
        <button onClick={() => this.props.onFetchUserData(this.state.userName)} className="name-form__btn btn">Show</button>
      </div>
    );
  };
};

// const mapState = state => {
//   return {
//     userData: userDataSelector(state),
//   };
// };

const mapDispatch = { onFetchUserData };

export default connect(null, mapDispatch)(SearchField);