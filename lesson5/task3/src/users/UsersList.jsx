import React from 'react';
import Filter from '../Filter';
import User from './User';
import { connect } from 'react-redux';
import { userName } from './users.actions';
import { userFilterTextSelector, usersListSelector } from './users.selectors';

const UsersList = ({filterText, usersList, userName}) => {
  return (
    <div>
      <Filter
        filterText={filterText}
        count={usersList.length}
        onChange={userName}
      />
      <ul className="users">
        {usersList.map(user => <User key={user.id} {...user} /> )}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    filterText: userFilterTextSelector(state),
    usersList: usersListSelector(state),
  };
};
const mapDispatch = { userName };
export default connect(mapState, mapDispatch)(UsersList);