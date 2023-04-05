const Tasks = ({ tasks, handleChange }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <div>
        {tasks.map((task) => {
          return (
            <div key={task.id}>
              <label>
                <input type="checkbox"
                  onChange={() =>
                    handleChange(task)}
                />
                {task.text}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;