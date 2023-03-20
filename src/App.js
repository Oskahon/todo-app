import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [completed, setCompleted] = useState([])
  const [task, setTask] = useState('')

  function addTask(event) {
    event.preventDefault()

    setTasks(tasks.concat((task)))
    setTask('')
  }

  return (
    <div>
      <h1>ToDo</h1>

      <form onSubmit={addTask}>
        <input
          value={task}
          name='task'
          id='task-input'
          onChange={({ target }) => {
            setTask(target.value)
          }}
        />
        <button type='submit'>Add</button>
      </form>

      <h2>Tasks</h2>
      <ul>
        {
          tasks.map(task => 
            <li key={tasks.indexOf(task)}>
              {task}
            </li>
          )
        }
      </ul>

      <h2>Done</h2>
      <ul>
        {
          completed.map(task => 
            <li key={completed.indexOf(task)}>
              {task}
            </li>
          )
        }
      </ul>

    </div>
  )
}

export default App;
