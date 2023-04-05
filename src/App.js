import { useState } from "react";
import Tasks from "./components/Tasks";
import CompletedTasks from "./components/CompletedTasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [task, setTask] = useState("");
  const [id, setId] = useState(0);

  function addTask(event) {
    event.preventDefault();

    const newTask = {
      id,
      text: task
    };

    setId(id + 1);

    setTasks(tasks.concat(newTask));
    setTask("");
  }

  function handleComplete(task) {
    setCompleted(completed.concat(task));
    const tempTasks = tasks.filter(x => x.id !== task.id);
    setTasks(tempTasks);
  }

  function handleNotCompleted(task) {
    setTasks(tasks.concat(task));
    const tempCompleted = completed.filter(x => x.id !== task.id);
    setCompleted(tempCompleted);
  }

  function handleRemoveCompleted(task) {
    const tempCompleted = completed.filter(x => x.id !== task.id);
    setCompleted(tempCompleted);
  }

  function handleRemoveNotCompleted(task) {
    const tempTasks = tasks.filter(x => x.id !== task.id);
    setTasks(tempTasks);
  }

  return (
    <div>
      <h1>ToDo</h1>

      <AddTask
        handleSubmit={addTask}
        task={task}
        setTask={setTask}
      />

      <Tasks
        tasks={tasks}
        handleChange={handleComplete}
        handleRemove={handleRemoveNotCompleted}
      />
      <CompletedTasks
        completed={completed}
        handleChange={handleNotCompleted}
        handleRemove={handleRemoveCompleted}
      />

    </div>
  );
};

export default App;
