import React from "react";
import { useDispatch } from "react-redux";
// import { loadData } from "../actions";
import { loadDataSaga } from "../actions";

const Connected = () => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(loadDataSaga());
  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default Connected;
