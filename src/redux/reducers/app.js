const appDefaultState = {
  userId: "",
  isAuthenticated: false,
};

const appReducer = (state = appDefaultState, action) => {
  switch (action.type) {
    case "SET_USER_ID":
      return { ...state, userId: action.userId };
    case "SET_IS_AUTHENTICATED":
      return { ...state, isAuthenticated: action.isAuthenticated };
    default:
      return { ...state };
  }
};

export default appReducer;
