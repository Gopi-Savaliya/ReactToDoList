import React, { Component } from 'react'

class Table extends Component {
  render() {
    const {tasks, taskComplete} = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Done</th>
          </tr>
        </thead>
        <tbody>
            {tasks && tasks.map((row, index) => {
                return <tr key={index}>
                    <td>{row.task}</td>
                    <td><button type="button" className="btn btn-success" onClick={()=>{taskComplete(index)}} >Task Complete</button></td>
              </tr>
            })}
        </tbody>
      </table>
    )
  }
}

export default Table