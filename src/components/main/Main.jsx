import React, { Component } from 'react';
import Tasks from '../Tasks';
import EditForm from '../editForm/EditForm';
import Form from '../Form';
import './style.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    EditFormVisible: false,
    EditFormData: '',
    EditFormIndex: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return;
    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks: tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();
    if (tasks.indexOf(newTask) !== -1) return;
    this.setState({
      tasks: [...tasks, newTask],
      newTask: '',
    });
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    this.setState({
      tasks: newTasks,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleCancelEdit = () => {
    this.setState({
      EditFormVisible: false,
    });
  };

  handleEdit = (e, index) => {
    const { tasks: tarefas } = this.state;
    this.setState({
      EditFormVisible: true,
      EditFormData: tarefas[index],
      EditFormIndex: index,
    });
  };

  render() {
    const {
      newTask,
      tasks,
      EditFormVisible,
      EditFormData,
      EditFormIndex,
    } = this.state;
    return (
      <div className="container">
        {EditFormVisible ? (
          <EditForm
            taskData={EditFormData}
            onCancel={this.handleCancelEdit}
            taskList={tasks}
            index={EditFormIndex}
          />
        ) : null}

        <div className="main">
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            newTask={newTask}
          />
        </div>
        <Tasks tasks={tasks} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
