import initialState from 'model/initialState';
import { ACTIONS } from 'utils/constants';

export function filterOn(state = initialState.filterOn, action) {
  return action.type === ACTIONS.FILTER_ON
    ? action.payload.filter
    : state;
}

export function newTask(state = initialState.newTask, action) {
  switch (action.type) {
    case ACTIONS.TODO_ITEM.UPDATE_NEW:
      return action.payload.task;
    case ACTIONS.TODO_LIST.ADD:
      return initialState.newTask;
    default:
      return state;
  }
}

export function todoList(state = initialState.todoList, action) {
  switch(action.type) {
    case ACTIONS.TODO_LIST.ADD:
      return [
        ...state,
        {
          id: Date.now(),
          isDone: false,
          task: action.payload.task,
        }
      ];
    case ACTIONS.TODO_LIST.REMOVE:
      return state.filter(item => item.id !== action.payload.id);
    case ACTIONS.TODO_ITEM.TOGGLE:
      return state.map(item => 
        item.id === action.payload.id 
          ? {...item, isDone: !item.isDone}
          : item
      );
    default:
      return state;
  }
}

const reducers = {
  filterOn,
  newTask,
  todoList
};

export default reducers;
