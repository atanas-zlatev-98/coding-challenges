'use client'

import { Provider } from "react-redux";
import { store } from "./store/store";
import Counter from "./Counter";

export default function ReduxStateManagement() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}