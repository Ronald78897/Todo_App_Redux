import React from "react";

import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class TodoForm extends React.Component {
  renderInput = (formProps) => {
    console.log(formProps);
    return (
      <div>
        <label>{formProps.label}</label>
        <br></br>
        <input
          value={formProps.input.value}
          onChange={formProps.input.onChange}
        />
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "blue", textAlign: "center" }}>
          {this.props.label}
        </h1>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            component={this.renderInput}
            label="Enter your Task"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter your task description"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    error.task = "Ttitle missing";
  }
  if (!formValues.description) {
    error.description = "Description Missing!";
  }
  return error;
};

export default reduxForm({
  form: "CreateTask",
  validate,
})(TodoForm);
