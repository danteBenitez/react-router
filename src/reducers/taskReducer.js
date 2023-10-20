export const TASK_ACTIONS = {
  ADD: "ADD",
  DELETE: "DELETE",
  TOGGLE_DONE: "TOGGLE DONE"
};

export default function taskReducer(state, action) {
  switch (action.type) {
    case TASK_ACTIONS.ADD: {
      return [...state, action.payload];
    }
    case TASK_ACTIONS.DELETE: {
      return state.filter((task) => task.id !== action.payload);
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
    case TASK_ACTIONS.LOAD: {
        console.log("Cargando todos...", localStorage.getItem("tasks"));
        return JSON.parse(localStorage.getItem("tasks")) ?? [];
    }
    case TASK_ACTIONS.SAVE: {
        if (state.length == 0) return;
        localStorage.setItem("tasks", JSON.stringify(state));
    }
  }
}
