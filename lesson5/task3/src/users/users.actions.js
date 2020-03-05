export const VALUE = 'USER/VALUE';

export const userName = text => {
  return {
    type: VALUE,
    payload: {text},
  };
};