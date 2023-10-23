import { TaskList } from "../components/TaskList";

function TaskListPage() {
  return (
    <>
      <div className="row container-fluid px-3 py-2 w-100">
        <div>
          <h1>Task Reducer</h1>
        </div>
        <div className="col-sm-12">
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default TaskListPage;
