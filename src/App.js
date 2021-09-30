import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Signin from './component/login';
import Register from './component/register';
import todosList from './component/todoList';
// import ItemList from './component/itemslist/itemslist';
import Navbar from './component/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Signin} exact />
        <Route path="/register" component={Register} />
        <Route path="/todos/:id" exact component={todosList} />
        {/* <Route path="/todos/:id/items" exact component={ItemList} /> */}
      </Switch>
    </div>
  );
}

export default App;
