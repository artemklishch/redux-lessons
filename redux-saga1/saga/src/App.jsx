import Connected from "./components/Connected";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers";
// import thunk from "redux-thunk";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { watchLoadData } from "./sagas";
import "./App.css";

function App() {
  const sagaMiddleware = createSagaMiddleware();
  // const store = createStore(reducer, applyMiddleware(logger, thunk));
  const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
  sagaMiddleware.run(watchLoadData); // это после передачи саги в мидлевеар
  return (
    <Provider store={store}>
      <Connected />
    </Provider>
  );
}

export default App;
