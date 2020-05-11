export default (state = 'en', action) => {
  switch(action.type){
    case 'lang': return action.payload.lang;
    default: return state;
  };
}; 

