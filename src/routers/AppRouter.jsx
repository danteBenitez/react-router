import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { TaskRouter } from "./TaskRouter";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/task/*" element={<TaskRouter />} />
        <Route path="*" element={<Navigate to={'/task'} />} />
      </Routes>
    </BrowserRouter>
  );
}
