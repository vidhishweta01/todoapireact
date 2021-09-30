import { combineReducers } from 'redux';
import todoReducer from './todo_reducer';
import PostTodoReducer from './post_data_reducer';
import RegisterationReducer from './registerationReducer';
import UpdateTodoReducer from './updateTodoReducer';
import DeleteTodoReducer from './deleteTodoReducer';

const rootReducer = combineReducers({
  RegisterationReducer,
  todoReducer,
  PostTodoReducer,
  UpdateTodoReducer,
  DeleteTodoReducer,

});

export default rootReducer;
