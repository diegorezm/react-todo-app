import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tasks.css';

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  console.log(tasks);
  return (
    <ul className="tasks">
      {tasks.map((task, i) => (
        <li key={task} className="task-list">
          <h1>{task}</h1>
          <span>
            <FaEdit
              className="edit"
              onClick={(e) => handleEdit(e, i)}
            />
            <FaWindowClose
              className="delete"
              onClick={(e) => handleDelete(e, i)}
            />
          </span>
        </li>
      ))}
    </ul>

  );
}
Tasks.prototype = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
