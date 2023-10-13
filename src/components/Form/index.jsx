import React from 'react';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Form.css';

export default function Form({ handleFormSubmit, handleInputChange, newTask }) {
  return (
    <>
      <h1>Task list</h1>
      <form className="task-form" onSubmit={handleFormSubmit}>
        <input
          value={newTask}
          onChange={handleInputChange}
          type="text"
        />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </>
  );
}

Form.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
