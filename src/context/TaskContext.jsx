import { createContext } from "react";
import taskReducer, { TASK_ACTIONS } from "../reducers/taskReducer";
import { useReducer } from "react";
import { useEffect } from "react";

export const TaskContext = createContext({});

export function TaskContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    dispatch({
      type: TASK_ACTIONS.LOAD,
    });
  }, []);

  useEffect(() => {
    if (tasks.length == 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id) =>
    dispatch({
      type: TASK_ACTIONS.DELETE,
      payload: id,
    });

  const toggleCompleted = (id) => {
    dispatch({
      type: TASK_ACTIONS.TOGGLE_DONE,
      payload: id,
    });
  };

  const addTask = (task) => dispatch({
    type: TASK_ACTIONS.ADD,
    payload: task
  })

  return (
    <TaskContext.Provider
      value={{
        tasks,
        dispatch,
        deleteTask,
        toggleCompleted,
        addTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
