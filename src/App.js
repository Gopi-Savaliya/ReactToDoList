import './App.css';
import React, { Component } from 'react'
import Table from './components/Table'
import Form from './components/Form';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={
                <div className="mt-5">
                  <Form onSubmitHandler={this.onSubmitHandler} />
                  <hr className="my-5" />
                  {this.state.tasks.length!==0?<Table tasks={this.state.tasks} taskComplete={this.taskComplete} />:""}
                </div>
              }/>
            <Route path="/tasks" element={this.state.tasks.length!==0?<Table tasks={this.state.tasks} taskComplete={this.taskComplete} />:<p className='App mt-5'>No Tasks</p>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
