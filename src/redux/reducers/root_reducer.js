import { combineReducers } from 'redux';
import todoReducer from './todo_reducer';

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
