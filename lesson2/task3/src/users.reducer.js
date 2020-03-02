const stateStore = {
  usersList: [],
};

export default (state = stateStore, action) => {
  switch(action.type){
    case 'ADDUSER': return {
      ...state,
      usersList: state.usersList.concat(action.user)
    };
    case 'DELETEUSER': return {
      ...state,
      usersList: state.usersList.filter(elem => !elem.id),
    };
    default: return state;
  };
};