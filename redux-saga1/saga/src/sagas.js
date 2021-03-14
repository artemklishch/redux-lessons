import { takeEvery, put, call } from "redux-saga/effects";
import { PUT_DATA_SAGA, putData } from "./actions";

function fetchData() {
  return fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  ).then((response) => response.json());
}

function* workerLoadData() {
  const data = yield call(fetchData);
  yield put(putData(data));
}

export function* watchLoadData() {
  yield takeEvery(PUT_DATA_SAGA, workerLoadData);
}
