import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Signin from './component/login';
import Register from './component/register';
import todosList from './component/todoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Signin} exact />
        <Route path="/register" component={Register} />
        <Route path="/todos/:id" component={todosList} />
      </Switch>
    </div>
  );
}

export default App;
