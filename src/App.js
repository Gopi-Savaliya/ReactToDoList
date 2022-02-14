import './App.css';
import React, { Component } from 'react'
import Table from './components/Table'
import Form from './components/Form';

class App extends Component {

  state = {
    tasks: []
  }

  taskComplete = (index) => {
    this.setState({
      tasks: this.state.tasks.filter((task, i) => {
        return i !== index
      }),
    });
  }

  onSubmitHandler = (task) => {
    this.setState({tasks: this.state.tasks.concat(task)});
  }

  componentDidMount = () => {
    JSON.parse(localStorage.getItem('tasks')) && this.setState({
      tasks: JSON.parse(localStorage.getItem('tasks'))
    });
  }

  componentDidUpdate = () => {
    localStorage.setItem('tasks',JSON.stringify(this.state.tasks));
  }

  render() {
    return (
      <div className="container">
        <h1 className='my-4'>To-Do List</h1>
        <Form onSubmitHandler={this.onSubmitHandler} />
        <hr className="my-5" />
        {this.state.tasks.length!==0?<Table tasks={this.state.tasks} taskComplete={this.taskComplete} />:""}
      </div>
    );
  }
}

export default App;
