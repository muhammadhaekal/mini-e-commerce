const appDefaultState = {
  userId: "",
  isAuthenticated: false,
  productList: [],
  filteredProducts: [],
  purchasedHistory: [],
  categories: [],
};

const appReducer = (state = appDefaultState, action) => {
  switch (action.type) {
    case "SET_USER_ID":
      return { ...state, userId: action.userId };
    case "SET_IS_AUTHENTICATED":
      return { ...state, isAuthenticated: action.isAuthenticated };
    case "SET_PRODUCT_LIST":
      return { ...state, productList: action.productList };
    case "SET_CATEGORIES":
      return { ...state, categories: action.categories };
    case "SET_FILTERED_PRODUCTS":
      return { ...state, filteredProducts: action.filteredProducts };
    case "TOGGLE_LOVE_STATUS":
      const newProductList = state.productList.map((product) => {
        if (product.id === action.id) {
          if (product.loved === 0) {
            return {
              ...product,
              loved: 1,
            };
          } else {
            return {
              ...product,
              loved: 0,
            };
          }
        } else {
          return product;
        }
      });
      return { ...state, productList: newProductList };
    case "ADD_PURCHASED_HISTORY":
      return {
        ...state,
        purchasedHistory: [action.product, ...state.purchasedHistory],
      };
    default:
      return { ...state };
  }
};

export default appReducer;
