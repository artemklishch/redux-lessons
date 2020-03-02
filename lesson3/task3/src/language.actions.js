export const setLanguage = (lang) => {
  return {
    type: 'lang',
    payload: {
      lang,
    },
  }; 
};