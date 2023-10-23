import { createContext } from "react";
import taskReducer, { TASK_ACTIONS } from "../reducers/taskReducer";
import { useReducer } from "react";
import { useEffect } from "react";

export const TaskContext = createContext({});

const init = () => {
  return JSON.parse(localStorage.getItem('tasks')) ?? [];
}

export function TaskContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, [], init);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
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

  const updateTask = (taskId, task)  => dispatch({
    type: TASK_ACTIONS.UPDATE,
    payload: {
      id: taskId,
      task
    }
  });


  return (
    <TaskContext.Provider
      value={{
        tasks,
        updateTask,
        deleteTask,
        toggleCompleted,
        addTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
