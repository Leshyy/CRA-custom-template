import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import { store } from './store/store';
import { observer } from 'mobx-react';

const TodoList: React.FC = () => {
  return (
    <section>
      {store.todos.map((todo) => {
        return (
          <h3 key={todo} onClick={() => store.removeTodo(todo)}>
            {todo}
          </h3>
        );
      })}
      <button onClick={() => store.addTodo()}>Add a todo!</button>
    </section>
  );
};

const ObserverTodoList = observer(TodoList);

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/todos">todos</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/todos">
            <ObserverTodoList />
          </Route>
          <Route path="/about">
            <h3>about</h3>
          </Route>
          <Route path="/home">
            <h3>home</h3>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
