import React, { Component } from 'react';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { goPrev, goNext } from './users.actions'
import { users } from './users.reducers';
import User from './User';

// class UsersList extends Component {
//   goPrev = () => {
//     this.props.goPrev();
//   };
//   goNext = () => {
//     this.props.goNext();
//   };
//   render() {
//     console.log(this.props);
//     return (
//       <Pagination
//         goPrev={this.goPrev}
//         goNext={this.goNext}
//       />
//     );
//   };
// };
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
        {usersList.map(user => {
          <User user={user} />
        })}
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