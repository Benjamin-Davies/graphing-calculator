export const TOGGLE_MODIFIER = 'TOGGLE_MODIFIER';

export const Modifier = {
  None: 'None',
  Shift: 'Shift',
  Alpha: 'Alpha',
  AlphaLock: 'AlphaLock'
};

const initialState = { modifier: Modifier.None };

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODIFIER:
      if (
        action.modifier === state.modifier ||
        (state.modifier === Modifier.AlphaLock &&
          action.modifier === Modifier.Alpha)
      ) {
        return { ...state, modifier: Modifier.None };
      } else if (
        state.modifier === Modifier.Shift &&
        action.modifier === Modifier.Alpha
      ) {
        return { ...state, modifier: Modifier.AlphaLock };
      } else {
        return { ...state, modifier: action.modifier };
      }
    default:
      return state;
  }
};
