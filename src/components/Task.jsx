import { useParams } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";
import { Link } from "react-router-dom";

export function Task() {
  const { tasks } = useTasks();
  const { taskId } = useParams();

  if (!tasks) return <p>Something went wrong...</p>;

  const task = tasks.find((task) => task.id == taskId);

  return (
    <div className="bg-white p-4 container">
      <pre>
        {!task && <p>Tarea no encontrada</p>}
        {task && <code>{JSON.stringify(task, null, 2)}</code>}
      </pre>
      <Link to={"../"}>
        Volver atrás
      </Link>
    </div>
  );
}
