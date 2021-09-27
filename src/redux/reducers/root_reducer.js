import { combineReducers } from 'redux';
import todoReducer from './todo_reducer';
import PostTodoReducer from './post_data_reducer';

const rootReducer = combineReducers({
  todoReducer,
  PostTodoReducer,
});

export default rootReducer;
