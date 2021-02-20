import React from "react";

import {
  createStore,
  combineReducers,
  bindActionCreators
} from "redux";

function run() {
  // Store initial state
  const initialState = { count: 0 };

  // reducer
  const counter = (state = initialState, action) => {
    switch (action.type) {
      case "PLUS_ONE":
        return { count: state.count + 1 };
      case "MINUS_ONE":
        return { count: state.count - 1 };
      case "CUSTOM_COUNT":
        return {
          count: state.count + action.payload.count
        };
      default:
        break;
    }
    return state;
  };

  const todo = (state = {}) => state;

  // Create store    combineReducers 是用来将多个reducer包含在一个中
  const store = createStore(
    combineReducers({
      todo,
      counter
    })
  );

  // Action creator
  function plusOne() {
    // action
    return { type: "PLUS_ONE" };
  }
  function minusOne() {
    return { type: "MINUS_ONE" };
  }
  function customCount(count) {
    return { type: "CUSTOM_COUNT", payload: { count } };
  }

  plusOne = bindActionCreators(plusOne, store.dispatch);

  store.subscribe(() => console.log(store.getState()));
  // store.dispatch(plusOne());  // 因为bindActionCreators做了dispatch的事情
  plusOne();
  store.dispatch(minusOne());
  store.dispatch(customCount(5));
}
export default () => (
  <div>
    <button onClick={run}>Run</button>
    <p>* 请打开控制台查看运行结果</p>
  </div>
);
