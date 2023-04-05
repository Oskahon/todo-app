const CompletedTasks = ({ completed, handleChange, handleRemove }) => {
  return (
    <div>
      <h2>Done</h2>
      <div>
        {completed.map((task) => {
          return (
            <div key={task.id}>
              <label>
                <input type="checkbox"
                  onChange={() =>
                    handleChange(task)} checked
                />
                {task.text}
              </label>
              <button
                onClick={() =>
                  handleRemove(task)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompletedTasks;