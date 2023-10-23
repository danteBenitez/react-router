import { useState } from "react";

export function TaskForm({ initial, onSubmit }) {
  const [input, setInput] = useState(initial.title);
  const [done, setDone] = useState(initial.done);

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (e.key == "Enter") {
      onSubmit({ title: input, done });
      setInput("");
    }
  };

  const handleChange = (e) => setInput(e.target.value);

  return (
    <div className="col-sm-12 col-md-4 p-4">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="title" className="fs-5">
            Título de la tarea:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Un título"
            name="title"
            value={input}
            onChange={handleChange}
            onKeyUpCapture={handleKeyDown}
          />
        </div>
        <div className="">
          <label htmlFor="done" className="fs-5">
            ¿Completada?
          </label>
          <input
            type="checkbox"
            name="done"
            className="ms-4"
            checked={done}
            onChange={() => setDone(!done)}
          />
        </div>
      </form>
    </div>
  );
}
