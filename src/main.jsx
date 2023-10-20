import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext.jsx";
import { AppRouter } from "./routers/AppRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <AppRouter />
    </TaskContextProvider>
  </React.StrictMode>
);
