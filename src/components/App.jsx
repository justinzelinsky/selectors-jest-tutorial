import { Grid, Paper } from '@material-ui/core';
import React from 'react';

import AppHeader from 'components/AppHeader';
import TodoList from 'todo/TodoList';
import TodoSettings from 'todo/TodoSettings';

import './App.scss';

const App = () => {
  return (
    <div styleName="root">
      <AppHeader />
      <Grid container={true} spacing={8}>
        <Grid item={true} xs={12} sm={4} md={2}>
          <Paper styleName="paper">
            <TodoSettings />
          </Paper>
        </Grid>
        <Grid item={true} xs={12} sm={8} md={10}>
          <Paper styleName="paper">
            <TodoList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
