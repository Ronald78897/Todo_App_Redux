import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showTodo } from "../actions";
import _ from "lodash";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.showTodo();
  }

  displayTodo = () => {
    return this.props.task.map((tasks) => {
      return (
        <div key={tasks.id}>
          {tasks.id}.{tasks.title} {tasks.description}
          <br></br>
          <Link to={`/todo/task/update/${tasks.id}`}>Update</Link>
          <br></br>
          <Link to={`/todo/task/delete/${tasks.id}`}>Delete</Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        {this.displayTodo()}
        <br></br>
        <Link to={"/todo/task/create"}>Create</Link>
      </div>
    );
  }
}
const MapStateToProps = (state) => {
  const task_value = Object.values(state.Tasks);
  return { task: task_value };
};

export default connect(MapStateToProps, { showTodo })(TodoList);
