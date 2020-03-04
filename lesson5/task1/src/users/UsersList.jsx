import React from 'react';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { goPrev, goNext } from './users.actions'
import { users } from './users.reducers';
import User from './User';
import { usersListSelector, currentPageSelector } from './users.selectors';

const UsersList = ({ goPrev, goNext, currentPage, usersList }) => {
  const itemsPerPage = 3;
  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersList.map(user => <User key={user.id} {...user} />)}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    usersList: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};
const mapDispatch = { goPrev, goNext };
export default connect(mapState, mapDispatch)(UsersList);