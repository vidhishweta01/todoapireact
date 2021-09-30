import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Signin from './component/login';
import Register from './component/register';
import todosList from './component/todoList';
import Navbar from './component/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Signin} exact />
        <Route path="/register" component={Register} />
        <Route path="/todos/:id" component={todosList} />
        <Route path="/todo/:id/items" exact component={Items} />
      </Switch>
    </div>
  );
}

export default App;
