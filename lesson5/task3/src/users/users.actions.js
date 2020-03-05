export const VALUE = 'USER/VALUE';

export const userName = event => {
  return {
    type: VALUE,
    payload: {text: event.target.value},
  };
};