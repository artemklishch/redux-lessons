const productState = {
  products: []
};

export default (state = productState, action) => {
  switch(action.type){
    case 'ADD_PRODUCT': return {
      products: state.products.concat(action.payload.productData),
    };
    case 'DELETE_PRODUCT': return {
      products: state.products.filter(product => product.id !== action.payload.productId),
    };
    default: return state;
  };
}; 