import CompletedTask from "./CompletedTask";

const CompletedTasks = ({ completed, handleChange, handleRemove }) => {
  return (
    <div>
      <h2>Done</h2>
      <div>
        {completed.map((task) =>
          <CompletedTask
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

export default CompletedTasks;