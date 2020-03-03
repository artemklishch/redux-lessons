import React, { Component } from 'react';
import { addUser, deleteUser } from './users.actions';
import { connect } from 'react-redux';

class Users extends Component{
  onCreateUser = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`
    };
    this.props.addUser(newUser);
  };
  render(){
    return (
      <div className="users">
        <button className="users__create-btn" onClick={this.onCreateUser}>Create user</button>
        <ul className="users__list">
          {this.props.users.map(user => 
            <li key={user.id} className="users__list-item">
              <span>{user.name}</span>
              <button className="users__delete-btn" onClick={() => this.props.deleteUser(user.id)}>+</button>
            </li>
          )}
        </ul>
      </div>
    );
  };
};

const mapState = state => {
  return {
    users: state.users.usersList,
  };
};
const mapDispatch = { addUser, deleteUser};

export default connect(mapState, mapDispatch)(Users);