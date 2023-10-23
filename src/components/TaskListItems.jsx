import { useNavigate } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";

export function TaskListItem({ task }) {
  const { deleteTask } = useTasks();
  const navigate = useNavigate();

  return (
    <tr className="p-2">
      <td>{task.id}</td>
      <td>{task.title}</td>
      <td>{task.done ? "Completado" : "No completado"}</td>
      <td className="d-flex gap-3 justify-content-center align-items-center">
        <button
          className="btn btn-warning"
          onClick={() => navigate(`/task/edit/${task.id}`)}
        >
          Editar
        </button>
        <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}
