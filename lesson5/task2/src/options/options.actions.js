export const OPTION_ID = 'OPTION/OPTION_ID';

export const choiceOption = optionId => {
  return {
    type: OPTION_ID,
    payload: {
      optionId,
    },
  };
};