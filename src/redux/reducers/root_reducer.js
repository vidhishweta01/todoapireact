import { combineReducers } from 'redux';
import todoReducer from './todo_reducer';
import PostTodoReducer from './post_data_reducer';
import RegisterationReducer from './registerationReducer';

const rootReducer = combineReducers({
  RegisterationReducer,
  todoReducer,
  PostTodoReducer,
});

export default rootReducer;
