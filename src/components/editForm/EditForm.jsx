import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';
import './style.css';

export default class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.taskData,
      onCancel: this.props.onCancel,
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { data, onCancel } = this.state;
    const { taskList, index } = this.props;
    console.log(data);
    taskList[index] = data;
    localStorage.setItem('tarefas', JSON.stringify(taskList));
    onCancel();
  };

  render() {
    const { onCancel, data } = this.state;
    const { taskList } = this.props;
    return (
      <div className="mainbg">
        <form onSubmit={this.handleFormSubmit} className="form-container">
          <h1>Edit task</h1>
          <input type="text" value={data} onChange={(e) => this.setState({ data: e.target.value })} />
          <button type="submit">enviar</button>
        </form>
        <div className="close-window">
          <FaWindowClose className="close-window" onClick={onCancel} />
        </div>
      </div>
    );
  }
}
EditForm.protoTypes = {
  taskData: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
