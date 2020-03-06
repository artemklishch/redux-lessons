import React, { Component } from 'react';
import TasksList from './tasks/TasksList';
import { connect } from 'react-redux';
import * as tasksAction from './tasks/tasks.actions'; 
import { sortedListSelector } from './tasks/tasks.selectors';
import PropTypes from 'prop-types';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTasksLists();
  }

  render(){
    return (
      <>
        <h1 className="title">Todo List</h1>
        <TasksList
          tasks={this.props.tasks}
          onCreateCertainTask={this.props.onCreateCertainTask}
          handleTaskOnChange={this.props.handleTaskOnChange}
          handleTaskDelete={this.props.handleTaskDelete}
        />
      </>
    );
  }
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
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

export default connect(mapState, mapDispatch)(TodoList);