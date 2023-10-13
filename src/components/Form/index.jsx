import React from 'react';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Form.css';

export default function Form({ handleFormSubmit, handleInputChange, novaTarefa }) {
  return (
    <>
      <h1>Lista de tarefas</h1>
      <form className="task-form" onSubmit={handleFormSubmit}>
        <input
          value={novaTarefa}
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
  novaTarefa: PropTypes.string.isRequired,
};
