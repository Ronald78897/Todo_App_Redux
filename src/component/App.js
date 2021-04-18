import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import UpdateTodo from "./UpdateTodo";
import DeleteTodo from "./DeleteTodo";
import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/" exact component={TodoList} />
          <Route path="/todo/task/create" exact component={CreateTodo} />
          <Route path="/todo/task/update/:id" exact component={UpdateTodo} />
          <Route path="/todo/task/delete/:id" exact component={DeleteTodo} />
        </div>
      </Router>
    </div>
  );
};

export default App;
