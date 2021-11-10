import './App.css';
import { Todo } from './Components/Todo';
import { Route } from "react-router-dom";
import { TodoDetails } from './Components/TodoDetails';
function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Todo/>
      </Route>
      <Route path="/todo/:id">
          <TodoDetails></TodoDetails>
        </Route>
    </div>
  );
}

export default App;
