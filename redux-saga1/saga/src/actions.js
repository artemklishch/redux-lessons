export const PUT_DATA = "PUT_DATA";
export const PUT_DATA_SAGA = "PUT_DATA_SAGA";

export const putData = (data) => {
  return {
    type: PUT_DATA,
    payload: data,
  };
};

// export const loadData = () => (dispatch, getState) => {
//   console.log(getState());
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => dispatch(putData(json)));
// };

export const loadDataSaga = () => {
  return {
    type: PUT_DATA_SAGA,
  };
};
