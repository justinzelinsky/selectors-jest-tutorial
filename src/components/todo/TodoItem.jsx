import classnames from 'classnames';
import { Button, Checkbox, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from 'model/mapDispatchToProps';

import './TodoItem.scss';

const TodoItem = ({ actions, item: { id, isDone, task } }) => {
  const taskTyle = classnames('todo-task', {complete: isDone});
  const handleRemoveItem = () => actions.removeTodoItem(id);
  const handleToggleItem = () => actions.toggleTodoItem(id);
  return (
    <li styleName="todo-item">
      <Grid alignItems="center" container={true}>
        <Grid item={true} xs={1}>
          <Checkbox
            checked={isDone}
            onChange={handleToggleItem}
          />
        </Grid>
        <Grid item={true} xs={9}>
          <Typography styleName={taskTyle}>{task}</Typography>
        </Grid>
        <Grid item={true} xs={2}>
          <Button 
            color="secondary"
            onClick={handleRemoveItem} 
            variant="contained" 
          >
            Remove
          </Button>
        </Grid>
      </Grid>
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

