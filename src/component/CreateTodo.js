import React from "react";
import { connect } from "react-redux";
import { createTodo } from "../actions";
import TodoForm from "./TodoForm";

class CreateTodo extends React.Component {
  onSubmit = (formValues) => {
    this.props.createTodo(formValues);
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.onSubmit} label="Add Tasks" />
      </div>
    );
  }
}

export default connect(null, { createTodo })(CreateTodo);
