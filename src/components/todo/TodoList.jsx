import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { If } from 'react-control-flow-components';
import { connect } from 'react-redux';

import mapDispatchToProps from 'model/mapDispatchToProps';
import { getFilterCount, getFilteredTodoList } from 'model/selectors';
import TodoItem from 'todo/TodoItem';

import './TodoList.scss';

const TodoList = ({ actions, filterCount, filterOn, newTask, todoList }) => {
  const handleAddListItem = event => {
    event.preventDefault();
    if (newTask) {
      actions.addTodoItem(newTask);
    }
  };
  const handleNewTaskOnChange = event => actions.updateNewTodoItem(event.target.value);
  return (
    <div styleName="todo-container"> 
      <h1>
        To-Do List ({filterCount[filterOn]})
      </h1>
      <form onSubmit={handleAddListItem}>
        <TextField
          fullWidth={true}
          id="new-todo-item"
          margin="normal"
          onChange={handleNewTaskOnChange}
          placeholder="Feed the cat"
          value={newTask}
        />
      </form>
      <ul styleName="todo-list">
        <If test={todoList.length === 0}>
          <li styleName="empty-list">No items!</li>
        </If>
        <If test={todoList.length > 0}>
          {todoList.map(todoItem => <TodoItem item={todoItem} key={todoItem.id}/>)}
        </If>
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  actions: PropTypes.object.isRequired,
  filterCount: PropTypes.object.isRequired,
  filterOn: PropTypes.string.isRequired,
  newTask: PropTypes.string.isRequired,
  todoList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  filterCount: getFilterCount(state),
  filterOn: state.filterOn,
  newTask: state.newTask,
  todoList: getFilteredTodoList(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);