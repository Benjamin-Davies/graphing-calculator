export const TOGGLE_MODIFIER = 'TOGGLE_MODIFIER';
export const RESET_MODIFIERS = 'RESET_MODIFIERS';
export const TOGGLE_MINIMISE = 'TOGGLE_MINIMISE';

export const Modifier = {
  None: 'None',
  Shift: 'Shift',
  Alpha: 'Alpha',
  AlphaLock: 'AlphaLock'
};

const initialState = {
  modifier: Modifier.None,
  minimiseOperatorsMobile: true
};

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

    case RESET_MODIFIERS:
      if (state.modifier === Modifier.AlphaLock) {
        return state;
      } else {
        return { ...state, modifier: Modifier.None };
      }

    case TOGGLE_MINIMISE:
      return {
        ...state,
        minimiseOperatorsMobile: !state.minimiseOperatorsMobile
      };

    default:
      return state;
  }
};
