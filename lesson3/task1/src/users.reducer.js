import { USER_ADD, USER_DELETE, USER_UPDATE } from './store.js';

const initialState = {
  usersList: [],
};

export default (state = initialState, action) => {
  switch(action.type){
    case USER_ADD: return {
      ...state,
      usersList: state.usersList.concat(action.payload.userData)
    }; 
    case USER_DELETE: return {
      ...state,
      usersList: state.usersList.filter(user => user.id !== action.payload.userId),
    }; 
    case USER_UPDATE: return {
      ...state,
      usersList: state.usersList
        .map(user => {
          if(user.id === action.payload.userId){
            user = action.payload.userData;
          }
          return user;
        })
    };
    default: return state;
  };
};