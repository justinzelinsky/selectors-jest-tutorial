import classnames from 'classnames';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from 'model/mapDispatchToProps';

import './TodoItem.scss';

const TodoItem = ({ actions, item: { id, isDone, task } }) => {
  const itemStyle = classnames('todo-item', {complete: isDone});
  const handleRemoveItem = () => actions.removeTodoItem(id);
  const handleToggleItem = () => actions.toggleTodoItem(id);
  return (
    <li styleName={itemStyle}>
      <FormControlLabel
        control={
          <Checkbox
            checked={isDone}
            onChange={handleToggleItem}
          />
        }
        label="Finished"
      />
      <span styleName="todo-task">{task}</span>
      <Button 
        variant="contained" color="secondary"
        onClick={handleRemoveItem} 
        styleName="todo-remove"
      >
        Remove
      </Button>
    </li>
  );
};

TodoItem.propTypes = {
  actions: PropTypes.object.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isDone: PropTypes.bool.isRequired,
    task: PropTypes.string.isRequired
  })
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);

