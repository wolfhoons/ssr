export const initialState = {
    isLoggedIn: false,
    user: null,
}

export const loginAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      console.log('reducer login', action.data);
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      }
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      }
    case 'LOG_IN_FAIL':
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      }
    default:
      return state;
  };
};

export default reducer;