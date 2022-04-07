import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <div className="d-flex bd-highlight p-3 mb-2 bg-light text-dark">
            <h1 className="p-2 flex-grow-1 bd-highlight">To-Do List</h1>
            <Link className="btn btn-outline-dark p-2 bd-highlight my-3 mx-3" to="/" role="button">Add Task</Link>
            <Link className="btn btn-outline-dark p-2 bd-highlight my-3 mx-3" to="/tasks" role="button">Task List</Link>
        </div>
    )
  }
}

export default Navbar