import { useState } from "react";
import Tasks from "./components/Tasks";
import CompletedTasks from "./components/CompletedTasks";

function App() {
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

  return (
    <div>
      <h1>ToDo</h1>

      <form onSubmit={addTask}>
        <input
          value={task}
          name="task"
          id="task-input"
          onChange={({ target }) => {
            setTask(target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>

      <Tasks
        tasks={tasks}
        handleChange={handleComplete}
      />
      <CompletedTasks
        completed={completed}
        handleChange={handleNotCompleted}
      />

    </div>
  );
}

export default App;
