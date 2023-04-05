const CompletedTask = ({ task, handleChange, handleRemove }) => {
  return (
    <div>
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
};

export default CompletedTask;