import { OPTION_ID } from './options.actions';

const options = [
  {
      id: 'id-0',
      name: '19-inch wheels',
  },
  {
      id: 'id-1',
      name: 'Leather-trimmed Sport Seats',
  },
  {
      id: 'id-2',
      name: 'B&O Sound System',
  },
  {
      id: 'id-3',
      name: 'Adaptive Cruise Control',
  },
  {
      id: 'id-4',
      name: 'Daytime running lights',
  },
  {
      id: 'id-5',
      name: 'Auto High-Beam Headlamps',
  },
  {
      id: 'id-6',
      name: 'Carbon Sport Interior',
  },
];

const goodsState = {
  optionsList: options,
  selected: [],
};

export default (state = goodsState, action) => {
  switch(action.type){
    case OPTION_ID: {
      // const { optionId } = action.payload;
      const newSelected = state.selected.includes(action.payload.optionId)
        ? state.selected.filter(id => id !== action.payload.optionId)
        : state.selected.concat(action.payload.optionId);
      return {
        ...state,
        selected: newSelected
      };
    };
    default: return state;
  };
};