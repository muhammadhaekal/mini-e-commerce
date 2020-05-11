import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import appReducer from "./reducers/app";

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
