import initialState from 'model/initialState';
import { newTask, todoList } from 'model/reducers';
import { ACTIONS } from 'utils/constants';

describe('Reducers', () => {
  it('should return the initial state of newTask', () => {
    expect(newTask(initialState.newTask, {})).toEqual(initialState.newTask);
  });

  it('should return the initial state of todoList', () => {
    expect(todoList(initialState.todoList, {})).toEqual(initialState.todoList);
  });

  it('should contain one item in the todoList', () => {
    const task = 'Feed the cat';
    const newState = todoList(initialState.todoList, {
      type: ACTIONS.TODO_LIST.ADD,
      payload: {
        task
      }
    });
    expect(newState).toHaveLength(1);
    expect(newState[0].task).toEqual(task);
  });

  it('should contain one item that is not done', () => {
    const task = 'Feed the cat';
    const newState = todoList(initialState.todoList, {
      type: ACTIONS.TODO_LIST.ADD,
      payload: {
        task
      }
    });
    const { isDone } = newState[0];
    expect(isDone).toBeFalsy(); 
  });

  it('should contain one item that is done after being toggled', () => {
    const task = 'Feed the cat';
    const newState = todoList(initialState.todoList, {
      type: ACTIONS.TODO_LIST.ADD,
      payload: {
        task
      }
    });
    const { id } = newState[0];
    const newerState = todoList(newState, {
      type: ACTIONS.TODO_ITEM.TOGGLE,
      payload: {
        id
      }
    });
    const { isDone } = newerState[0];
    expect(isDone).toBeTruthy();
  });
});