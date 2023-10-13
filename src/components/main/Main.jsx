import React, { Component } from 'react';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';
import './style.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      novaTarefa: '',
      tarefas: ['fazer cafe', 'estudar', 'sla', 'sla dnv'],
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div>
        <div className="main">
          <h1>Lista de tarefas</h1>
          <form className="task-form" onSubmit={this.handleFormSubmit}>
            <input
              value={novaTarefa}
              onChange={(e) => this.setState({ novaTarefa: e.target.value })}
              type="text"
            />
            <button type="submit">
              <FaPlus />
            </button>
          </form>
        </div>

        <ul className="tasks">
          {tarefas.map((tarefa) => (
            <li key={tarefa} className="task-list">
              <h1>{tarefa}</h1>
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
