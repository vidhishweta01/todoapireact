import { combineReducers } from 'redux';
import todoReducer from './todo_reducer';
import PostDataReducer from './post_data_reducer';
const rootReducer = combineReducers({
  todoReducer,
  PostDataReducer,
});

export default rootReducer;
