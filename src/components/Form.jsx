import PropTypes from "prop-types";
import React from "react";

function Form({ handler, currentNum }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.todo.value, "event");
    handler((prev) => [...prev, event.target.todo.value]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo" className="sr-only">
        What needs to be done?
      </label>
      <input type="text" id="todo" name="todo" />
      <button
        type="submit"
        className="p-4 rounded-sm text-white bg-yellow-500 ml-2"
      >
        Add {currentNum}
      </button>
    </form>
  );
}

Form.propTypes = {
  handler: PropTypes.func.isRequired,
  currentNum: PropTypes.number.isRequired,
};
export default Form;
