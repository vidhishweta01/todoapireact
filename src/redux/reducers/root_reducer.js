import { combineReducers } from 'redux';
import todoReducer from './pokeReducer';

const rootReducer = combineReducers({
  PokeReducer,
  todoReducer
});

export default rootReducer;
