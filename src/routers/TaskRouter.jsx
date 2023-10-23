import { Route, Routes } from "react-router-dom";
import { Task } from "../components/Task";
import TaskListPage from "../pages/TaskListPage";
import { TaskEdit } from "../pages/TaskEdit";
import { TaskAdd } from "../pages/TaskAdd";

export function TaskRouter() {
  return (
    <Routes>
      <Route element={<TaskListPage />} path={"/"} />
      <Route element={<TaskAdd />} path="/create" />
      <Route element={<TaskEdit />} path={"/edit/:taskId"} />
      <Route element={<Task />} path={"/:taskId"} />
    </Routes>
  );
}
