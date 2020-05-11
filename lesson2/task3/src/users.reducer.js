const stateStore = {
  usersList: [],
};

export default (state = stateStore, action) => {
  switch(action.type){
    case 'ADDUSER': return {
      ...state,
      usersList: state.usersList.concat(action.userData)
    };
    case 'DELETEUSER': return {
      ...state,
      usersList: state.usersList.filter(elem => elem.id !== action.userId),
    };
    default: return state;
  };
};