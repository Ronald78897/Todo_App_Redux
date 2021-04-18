import React from "react";
import { connect } from "react-redux";
import { fetchTodo, editTodo } from "../actions";
import TodoForm from "./TodoForm";
import _ from "lodash";

class UpdateTodo extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editTodo(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <TodoForm
          label="Update Task"
          initialValues={this.props.task}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const MapStateToProps = (state, ownProps) => {
  const new_tasks = _.mapKeys(state.Tasks, "id");
  return { task: new_tasks[ownProps.match.params.id] };
};

export default connect(MapStateToProps, { fetchTodo, editTodo })(UpdateTodo);
