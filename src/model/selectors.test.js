import initialState from 'model/initialState';
import { todoList } from 'model/reducers';
import { getTodos } from 'model/selectors';
import { ACTIONS, FILTERS } from 'utils/constants';
import { getFilterCount, getFilteredTodoList } from './selectors';

function getTodoList(count) {
  const todoList = [];
  for (let i=0; i<count; i++) {
    todoList.push({
      id: i,
      isDone: false,
      task: `Task ${i}`
    });
  }
  return todoList;
}

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

  describe('getFilteredTodoList', () => {
    it('should return a todo list of all items', () => {
      const state = {
        filterOn: initialState.filterOn,
        todoList: getTodoList(2)
      };
      const filteredTodos = getFilteredTodoList(state);
      expect(filteredTodos).toHaveLength(2);
    });

    it('should return a todo list of all completed items', () => {
      const list = getTodoList(5);
      const state = {
        filterOn: FILTERS.COMPLETE,
        todoList: todoList(list, {
          type: ACTIONS.TODO_ITEM.TOGGLE,
          payload: {
            id: list[0].id
          }
        })
      };
      const filteredTodos = getFilteredTodoList(state);
      expect(filteredTodos).toHaveLength(1);
    });
  });

  describe('getFilterCount', () => {
    it('should be have all tasks as remaining', () => {
      const list = getTodoList(5);
      const state = {
        filterOn: FILTERS.ALL,
        todoList: list
      };
      const filterCount = getFilterCount(state);
      expect(filterCount[FILTERS.ALL]).toBe(5);
      expect(filterCount[FILTERS.COMPLETE]).toBe(0);
      expect(filterCount[FILTERS.REMAINING]).toBe(5);
    });
  });

  it('should have one complete and the rest remaining', () => {
    const list = getTodoList(5);
    const state = {
      filterOn: FILTERS.COMPLETE,
      todoList: todoList(list, {
        type: ACTIONS.TODO_ITEM.TOGGLE,
        payload: {
          id: list[0].id
        }
      })
    };
    const filterCount = getFilterCount(state);
    expect(filterCount[FILTERS.ALL]).toBe(5);
    expect(filterCount[FILTERS.COMPLETE]).toBe(1);
    expect(filterCount[FILTERS.REMAINING]).toBe(4);
  });
});