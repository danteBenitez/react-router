import { useParams } from "react-router-dom";
import { TaskForm } from "../components/TaskForm";
import { useTasks } from "../hooks/useTasks";
import { useNavigate } from "react-router-dom";

export function TaskEdit() {
  const { tasks, updateTask } = useTasks();
  const { taskId } = useParams();
  const navigate = useNavigate();

  const task = tasks.find(task => task.id == taskId);
  if (!task) return <p>Tarea no encontrada...</p>;

  const handleSubmit = ({ title, done }) => {
    updateTask(taskId, {
        title,
        done 
    });
    navigate('../');
  }

  return <TaskForm initial={task} onSubmit={handleSubmit} />
}
