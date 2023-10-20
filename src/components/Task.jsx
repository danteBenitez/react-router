import { useParams } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";

export function Task() {
  const { tasks } = useTasks();
  const [{ taskId }] = useParams();

  const task = tasks.find((task) => task.id == taskId);

  return (
    <pre>
      <code>{JSON.stringify(task, null, 2)}</code>
    </pre>
  );
}
