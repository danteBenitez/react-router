export const TASK_ACTIONS = {
  ADD: "ADD",
  DELETE: "DELETE",
  TOGGLE_DONE: "TOGGLE DONE",
};

export default function taskReducer(state, action) {
  switch (action.type) {
    case TASK_ACTIONS.ADD: {
      return [...state, action.payload];
    }
    case TASK_ACTIONS.DELETE: {
      const deleted = state.filter((task) => task.id !== action.payload);
      return deleted;
    }
    case TASK_ACTIONS.TOGGLE_DONE:
      return state.map((task) =>
        task.id == action.payload
          ? {
              ...task,
              done: !task.done,
            }
          : task
      );
    case TASK_ACTIONS.UPDATE: {
      const { task: newTask, id } = action.payload;
      const updated = state.map((task) =>
        task.id == id
          ? {
              ...task,
              ...newTask,
            }
          : task
      );
      return updated;
    }
    default: {
      return state;
    }
  }
}
