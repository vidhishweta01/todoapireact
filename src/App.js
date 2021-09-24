import { Switch, Route } from 'react-router-dom';
import todosList from './component/todoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={todosList} exact />
      </Switch>
    </div>
  );
}

export default App;
