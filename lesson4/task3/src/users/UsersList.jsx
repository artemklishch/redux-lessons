import React, { Component } from 'react';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { goPrev, goNext } from './users.actions'
import { users } from './users.reducers';
import User from './User';

const UsersList = ({ goPrev, goNext, currentPage, usersList }) => {
  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={usersList.length}
      />
      <ul className="users">
        {usersList.map(user => <User key={user.id} {...user} />)}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    usersList: state.users.usersList,
    currentPage: state.users.currentPage
  };
};
const mapDispatch = { goPrev, goNext };
export default connect(mapState, mapDispatch)(UsersList);