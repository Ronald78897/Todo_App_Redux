import React, { useEffect } from "react";
import { deleteTodo } from "../actions";
import { connect } from "react-redux";

const DeleteTodo = (props) => {
  console.log(props.match.params.id);
  useEffect(() => {
    props.deleteTodo(props.match.params.id);
  }, []);
  return <div>delete Todo</div>;
};

export default connect(null, { deleteTodo })(DeleteTodo);
