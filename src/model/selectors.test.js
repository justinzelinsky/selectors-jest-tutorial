import initialState from 'model/initialState';
import { todoList } from 'model/reducers';
import { getTodos } from 'model/selectors';
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
});