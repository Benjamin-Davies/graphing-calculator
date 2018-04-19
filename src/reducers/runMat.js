export const ADD_SYMBOL = 'ADD_SYMBOL';

const initialState = { lines: [], activeLine: [], cursor: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SYMBOL:
      return {
        ...state,
        activeLine: [...state.activeLine, action.symbol]
      };

    default:
      return state;
  }
};
