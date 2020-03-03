import React from 'react';

const User = props => {
  return (
    <li className="user">
      <span className="user__name">{props.user.name}</span>
      <span className="user__age">{props.user.age}</span>
    </li>
  );
};
export default User;