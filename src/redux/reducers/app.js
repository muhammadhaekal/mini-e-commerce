const appDefaultState = {
  userId: "",
  isAuthenticated: false,
  products: [],
  filteredProducts: [],
};

const appReducer = (state = appDefaultState, action) => {
  switch (action.type) {
    case "SET_USER_ID":
      return { ...state, userId: action.userId };
    case "SET_IS_AUTHENTICATED":
      return { ...state, isAuthenticated: action.isAuthenticated };
    case "SET_PRODUCT_LIST":
      return { ...state, productList: action.productList };
    case "SET_FILTERED_PRODUCTS":
      return { ...state, filteredProducts: action.filteredProducts };
    default:
      return { ...state };
  }
};

export default appReducer;
