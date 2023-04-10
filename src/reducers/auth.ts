const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'REGISTER_USER_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
