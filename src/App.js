import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";

class Task1 extends Component {
  state = {
    tasks: [],
    editFlag: false,
    index: 0,
  };

  addTask = () => {
    if (!this.state.editFlag) {
      let input = document.getElementById("input").value;
      let copy_tasks = [...this.state.tasks];
      let length = copy_tasks.length;
      copy_tasks[length] = input;
      this.setState({ tasks: copy_tasks });
      document.getElementById("input").value = "";
    } else {
      let copy_tasks = [...this.state.tasks];
      let input = document.getElementById("input").value;
      copy_tasks[this.state.index] = input;
      this.setState({ tasks: copy_tasks, editFlag: false });
      document.getElementById("input").value = "";
    }
  };

  deleteTask = (index) => {
    let copy_tasks = [...this.state.tasks];
    copy_tasks.splice(index, 1);
    this.setState({ tasks: copy_tasks });
  };

  editTask = (index) => {
    document.getElementById("input").value = this.state.tasks[index];
    this.setState({ editFlag: true, index: index });
  };

  render() {
    return (
      <div>
        <center>
          <input type="text" id="input" />
          <button onClick={this.props.onAddTask}>Add Task</button>
        </center>
        <ul>
          {this.props.list.map((tasks, index) => {
            return (
              <div>
                <table>
                  <tr>
                    <td>{tasks}</td>
                    <td>
                      <button onClick={() => this.deleteTask(index)}>
                        Delete Task
                      </button>
                    </td>
                    <td>
                      <button onClick={() => this.editTask(index)}>
                        Edit Task
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.tasks,
    eFlag: state.editFlag,
    ind: state.index,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTask: () =>
      dispatch({
        type: "addTask",
        package: {
          input: document.getElementById("input").value,
        },
      }),
    onEditTask: (index) => dispatch({ type: "editTask" }),
    onDeleteTask: (index) => dispatch({ type: "deleteTask" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Task1);
