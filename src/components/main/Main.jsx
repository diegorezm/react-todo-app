import React, { Component } from 'react';
import Tasks from '../Tasks';
import EditForm from '../editForm/EditForm';
import Form from '../Form';
import './style.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    EditFormVisible: false,
    EditFormData: '',
    EditFormIndex: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (!tarefas) return;
    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    if (tarefas.indexOf(novaTarefa) !== -1) return;
    this.setState({
      tarefas: [...tarefas, novaTarefa],
      novaTarefa: '',
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const newTarefas = [...tarefas];
    newTarefas.splice(index, 1);

    this.setState({
      tarefas: newTarefas,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleCancelEdit = () => {
    this.setState({
      EditFormVisible: false,
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      EditFormVisible: true,
      EditFormData: tarefas[index],
      EditFormIndex: index,
    });
  };

  render() {
    const {
      novaTarefa,
      tarefas,
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
            taskList={tarefas}
            index={EditFormIndex}
          />
        ) : null}

        <div className="main">
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            novaTarefa={novaTarefa}
          />
        </div>
        <Tasks tarefas={tarefas} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
