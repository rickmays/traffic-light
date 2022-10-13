import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import TrafficLight from "./TrafficLight";

export const RED = "RED";
export const YELLOW = "YELLOW";
export const GREEN = "GREEN";

export function setRed() {
  return {type: RED, }};

export function setYellow() {
  return { type: YELLOW };
}

export function setGreen() {
  return { type: GREEN }
};

const initialState = {
  red: true,
  yellow: false,
  green: false,
};

const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case RED:
      return {
        ...state,
        red: true,
        yellow: false,
        green: false,
      };
    case YELLOW:
      return {
        ...state,
        red: false,
        yellow: true,
        green: false,
      };
    case GREEN:
      return {
        ...state,
        red: false,
        yellow: false,
        green: true,
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <TrafficLight />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
