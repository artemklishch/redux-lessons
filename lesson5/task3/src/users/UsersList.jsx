import React from 'react';
import Filter from '../Filter';
import User from './User';
import { connect } from 'react-redux';

const UsersList = ({filterText,usersList}) => {
  return (
    <div>
      <Filter
        filterText={filterText}
        count={usersList.length}
        // onChange={}
      />
      <ul className="users">
        {usersList.map(user => (
          key=user.id, {...user}
        ))}
        <User
          // name={}
          // age={}
        />
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    filterText: state.users.filterText,
    usersList: state.users.usersList,
  };
};

export default connect(mapState)(UsersList);