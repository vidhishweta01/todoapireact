import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Signin from './component/login';
import Register from './component/register';
import todosList from './component/todoList';
import Navbar from './component/Navbar';
import ItemList from './component/itemslist/itemslist';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Signin} exact />
        <Route path="/register" component={Register} />
        <Route path="/user/:id/todos/" component={todosList} />
        <Route path="/todo/:id/items/" component={ItemList} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
