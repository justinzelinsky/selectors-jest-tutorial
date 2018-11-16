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
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={2}>
          <Paper styleName="paper">
            <TodoSettings />
          </Paper>
        </Grid>
        <Grid item={true} xs={10}>
          <Paper styleName="paper">
            <TodoList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
