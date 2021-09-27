import { Switch, Route } from 'react-router-dom';
import React from 'react';
// import { useDispatch } from 'react-redux';
// import { SignIn } from './redux/action/todoAction';
import todosList from './component/todoList';
import './App.css';

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(SignIn());
  // }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={todosList} exact />
      </Switch>
      working
    </div>
  );
}

export default App;
