export const addProduct = (productData) => {
  return {
    type: 'ADD_PRODUCT',
    payload: {
      productData,
    },
  };
};

export const removeProduct = (productId) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: {
      productId,
    },
  };
};