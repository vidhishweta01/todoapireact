// import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/root_reducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
