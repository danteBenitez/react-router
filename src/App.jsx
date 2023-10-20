import "./App.css";
import { useState } from "react";
import { useTasks } from "./hooks/useTasks";
import { Link } from 'react-router-dom';

function App() {
  const { addTask } = useTasks();
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (e.key == "Enter") {
      addTask({
        id: new Date().getTime(),
        title: input,
        done: false,
      });
      setInput("");
    }
  };

  return (
    <>
      <div className="row container px-3 py-2">
        <div>
          <h1>Task Reducer</h1>
        </div>
        <div className="col-4 p-4">
          <label htmlFor="title" className="fs-4">
            Título de la tarea:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Un título"
            name="title"
            value={input}
            onChange={(evt) => setInput(evt.target.value)}
            onKeyUpCapture={handleKeyDown}
          />
        </div>
        <div className="col-sm-12 col-md-8">
          <TaskList />
        </div>
      </div>
    </>
  );
}

function TaskList() {
  const { tasks, toggleCompleted, deleteTask } = useTasks();

  return (
    <div className="py-5">
      <ul className="list-unstyled">
        {tasks.length == 0 ? (
          <li className="rounded-3 p-3 text-black text-center fs-6 bg-info-subtle">
            No hay todos para mostrar
          </li>
        ) : (
          tasks.map((todo) => {
            const text = todo.done ? "Completado" : "Completar";
            const btnClass = todo.done ? "btn-success" : "btn-warning";
            const bgClass = todo.done ? "alert-success" : "alert-warning";
            return (
              <li
                key={todo.id}
                className={`d-flex justify-content-between gap-3 alert align-items-center ${bgClass} p-3`}
              >
                <Link className="text-decoration-none d-flex gap-3 w-100 justify-content-between" to={`/tasks/${todo.id}`}>
                  <span className="text-body-emphasis fs-6">{todo.title}</span>
                  <div className="d-flex gap-3">
                    <button
                      onClick={() => toggleCompleted(todo.id)}
                      className={`btn ${btnClass}`}
                    >
                      {text}
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTask(todo.id)}
                    >
                      Borrar
                    </button>
                  </div>
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default App;
