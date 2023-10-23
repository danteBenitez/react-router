import { useNavigate } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";
import { TaskListItem } from "./TaskListItems";

export function TaskList() {
  const { tasks } = useTasks();
  const navigate = useNavigate();

  return (
    <div className="py-5 d-flex justify-content-center">
      <div className="w-100">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/task/create")}
        >
          Crear
        </button>
        {tasks.length == 0 && (
          <p className="alert alert-info mt-3 text-center">No se encontraron tareas...</p>
        )}
        {tasks.length != 0 && (
          <table className="w-100 table-active">
            <thead>
              <th>ID</th>
              <th>Título</th>
              <th>Completado</th>
              <th className="text-center">Acciones</th>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <TaskListItem task={task} key={task.id} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
