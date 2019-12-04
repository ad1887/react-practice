import { createStore, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
// import combineReducer from "./reducers";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer);
export default store;