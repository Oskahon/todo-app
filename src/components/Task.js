const Task = ({ task, handleChange, handleRemove }) => {
  return (
    <div>
      <label>
        <input type="checkbox"
          onChange={() =>
            handleChange(task)}
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
};

export default Task;