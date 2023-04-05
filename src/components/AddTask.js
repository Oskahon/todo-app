const AddTask = ({ handleSubmit, task, setTask }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
        </div>
    );
};

export default AddTask;