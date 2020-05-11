import { createSelector } from 'reselect'

export const optionsListSelector = state => {
  return state.options.optionsList;
};

export const selectedListSelector = state => {
  return state.options.selected;
};

// export const availableOptionsSelector = state => {
//   const allOptions = optionsListSelector(state);
//   const selectedId = selectedListSelector(state);
//   return allOptions.filter(option => !selectedId.includes(option.id));
// };

// export const selectedOptionsSelector = state => {
//   const allOptions = optionsListSelector(state);
//   const selectedId = selectedListSelector(state);
//   return allOptions.filter(option => selectedId.includes(option.id));
// };

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedListSelector],
  (optionsList, selectedList) => {
    return optionsList.filter(option => !selectedList.includes(option.id));
  }
); 

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedListSelector],
  (optionsList, selectedList) => {
    return optionsList.filter(option => selectedList.includes(option.id));
  }
); 