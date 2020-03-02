export default (state = null, action) => {
  switch(action.type){
    case 'SET_USER': return action.payload.userData;
    case 'REMOVE_USER': return null;
    default: return state;
  };
};