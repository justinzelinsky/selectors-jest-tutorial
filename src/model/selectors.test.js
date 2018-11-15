import initialState from 'model/initialState';
import { todoList } from 'model/reducers';
import { getRemainingTaskCount, getTodos } from 'model/selectors';
import { ACTIONS } from 'utils/constants';

describe('Todo Selectors', () => {

  describe('getTodos', () => {
    it('should return an empty to-do list initially', () => {
      const list = getTodos(initialState);
      expect(list).toHaveLength(0);
    });

    it('should return a list with one todo item', () => {
      const task = 'Feed the cat';
      const state = {
        todoList: todoList(initialState.todoList, {
          type: ACTIONS.TODO_LIST.ADD,
          payload: {
            task
          }
        })
      };
      const list = getTodos(state);
      expect(list).toHaveLength(1);
    });
  });

  describe('getRemainingTasksCount', () => {
    it('should initially return remaining tasks as 0', () => {
      const remainingTaskCount = getRemainingTaskCount(initialState);
      expect(remainingTaskCount).toEqual(0);
    });

    it('should only calculate remaining count once when unchanged', () => {
      getRemainingTaskCount(initialState);
      getRemainingTaskCount(initialState);
      expect(getRemainingTaskCount.recomputations()).toEqual(1);
    });

    it('should recalculate when the state changes', () => {
      const task = 'Feed the cat';
      getRemainingTaskCount(initialState);
      const newState = {
        todoList: todoList(initialState.todoList, {
          type: ACTIONS.TODO_LIST.ADD,
          payload: {
            task
          }
        })
      };
      getRemainingTaskCount(newState);
      expect(getRemainingTaskCount.recomputations()).toEqual(2);
    });

    it('should show one remaining task', () => {
      const remainingTaskCount = getRemainingTaskCount(initialState);
      expect(remainingTaskCount).toEqual(0);
      const task = 'Feed the cat';
      const newState = {
        todoList: todoList(initialState.todoList, {
          type: ACTIONS.TODO_LIST.ADD,
          payload: {
            task
          }
        })
      };
      const newRemainingTaskCount = getRemainingTaskCount(newState);
      expect(newRemainingTaskCount).toEqual(1);
    });
  });
});