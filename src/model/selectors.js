import { createSelector } from 'reselect';

import { FILTERS } from 'utils/constants';

export const getTodos = state => state.todoList;

export const getFilterOn = state => state.filterOn;

export const getFilteredTodoList = createSelector(
  [getTodos, getFilterOn],
  (todoList, filterOn) => {
    switch(filterOn) {
      case FILTERS.ALL:
        return todoList;
      case FILTERS.COMPLETE:
        return todoList.filter(item => item.isDone);
      case FILTERS.REMAINING:
        return todoList.filter(item => !item.isDone);
    }
  }
);

export const getFilterCount = createSelector(
  [getTodos],
  (todoList) => {
    const count = {};
    count[FILTERS.ALL] = todoList.length;
    count[FILTERS.COMPLETE] = todoList.filter(item => item.isDone).length;
    count[FILTERS.REMAINING] = todoList.filter(item => !item.isDone).length;
    return count;
  }
);
