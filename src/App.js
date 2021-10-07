import { Switch, Route, Redirect } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Signin from './component/login';
import Register from './component/register';
import todosList from './component/todoList';
import Navbar from './component/Navbar';
import ItemList from './component/itemslist/itemslist';
import { windowReload } from './helper/helper';
import './App.css';

function App() {
  const state = useSelector((state) => state.RegisterationReducer);
  useEffect(() => {}, [state]);
  if (windowReload()) {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Signin} exact />
        </Switch>
      </div>
    );
  }
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
