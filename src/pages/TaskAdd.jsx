import { useNavigate } from "react-router-dom";
import { TaskForm } from "../components/TaskForm";
import { useTasks } from "../hooks/useTasks";

export function TaskAdd() {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSubmit = ({ title, done }) => {
    addTask({
        id: new Date().getTime(),
        title,
        done 
    });
    navigate('../');
  }

  const initial = {
    title: '',
    done: false
  }


  return <TaskForm initial={initial} onSubmit={handleSubmit} />;
}