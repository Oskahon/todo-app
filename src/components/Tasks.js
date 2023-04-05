import Task from "./Task";

const Tasks = ({ tasks, handleChange, handleRemove }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <div>
        {tasks.map((task) =>
          <Task
            key={task.id}
            task={task}
            handleChange={handleChange}
            handleRemove={handleRemove}
          />
        )}
      </div>
    </div>
  );
};

export default Tasks;