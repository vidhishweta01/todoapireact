import { Switch, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { SignIn } from './redux/action/todoAction';
import Signin from './component/login/SignIn';
import todosList from './component/todoList';
import './App.css';

function App() {
  const state = useSelector((state) => state.todoReducer);
  useEffect(() => {}, [state]);
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Signin} exact />
        <Route path="/todos/:id" component={todosList} />
      </Switch>
    </div>
  );
}

export default App;
