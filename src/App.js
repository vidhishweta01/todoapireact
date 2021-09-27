import { Switch, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PostData } from './redux/action/todoAction';
import todosList from './component/todoList';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PostData());
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={todosList} exact />
      </Switch>
    </div>
  );
}

export default App;
