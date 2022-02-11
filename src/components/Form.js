import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        task: ''
    }
    
    state = this.initialState;

    changeHandler = (event) => {
        const task = event.target.value;
        this.setState({
            task: task
        })
    }

    submitForm = () => {
      this.props.onSubmitHandler(this.state);
      this.setState(this.initialState);
    }

  render() {
    const { task, job } = this.state;

    return (
      <form>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">Task</label>
          <input type="text" className="form-control" id="task" name="task" value={task} onChange={this.changeHandler} />
        </div>
        <button type="button" className="btn btn-primary" value="Submit" onClick={this.submitForm}>Submit</button>
      </form>
    )
  }
}

export default Form