import { USER_NAME } from './users.actions';
import { fetchForGetUserData } from './users.gateway';

const usersState = {
  userData: null,
  isFetching: false,
};

export default (state = usersState, action) => {
  switch(action.type){
    case USER_NAME: {
      const user = {};
      fetchForGetUserData(action.payload.userName)
        .then(userData => Object.assign(user,userData));
      return {
        ...state,
        userData: user,
      };
    }; 
    default: return state;
  };
};