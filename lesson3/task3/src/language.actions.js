export default (lang) => {
  return {
    type: 'lang',
    payload: {
      lang,
    },
  }; 
};