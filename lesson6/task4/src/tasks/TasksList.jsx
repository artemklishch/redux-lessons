import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { connect } from 'react-redux';
import * as tasksAction from './tasks.actions'; 
import { sortedListSelector } from './tasks.selectors';
import PropTypes from 'prop-types';

class TasksList extends Component {
  componentDidMount() {
    this.props.getTasksLists();
  }

  render() {
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.props.onCreateCertainTask} />
        <ul className="list">
          {
            this.props.tasks.map(task =>
              <Task
                key={task.id}
                {...task}
                onChange={this.props.handleTaskOnChange}
                handleTaskDelete={this.props.handleTaskDelete}
              />)
          }
        </ul>
      </main>
    );
  }
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTasksLists: PropTypes.func.isRequired,
  onCreateCertainTask: PropTypes.func.isRequired,
  handleTaskOnChange: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
};
TasksList.defaultValue = {
  tasks: [],
};

const mapState = state => {
  return {
    tasks: sortedListSelector(state),
  };
};
const mapDispatch = {
  getTasksLists: tasksAction.getTasksLists,
  onCreateCertainTask: tasksAction.onCreateCertainTask,
  handleTaskOnChange: tasksAction.handleTaskOnChange,
  handleTaskDelete: tasksAction.handleTaskDelete,
};

export default connect(mapState, mapDispatch)(TasksList);