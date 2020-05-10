export const setUserId = (userId) => ({
  type: "SET_USER_ID",
  userId,
});

export const setIsAuthenticated = (isAuthenticated) => ({
  type: "SET_IS_AUTHENTICATED",
  isAuthenticated,
});

export const setProductList = (productList) => ({
  type: "SET_PRODUCT_LIST",
  productList,
});

export const setFilteredProducts = (filteredProducts) => ({
  type: "SET_FILTERED_PRODUCTS",
  filteredProducts,
});
