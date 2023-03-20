import { useState } from 'react'

function App() {
  const [tasks, setTasks] =
    useState(['Koodaile', 'Kato formulat', 'Tiskaile'])
  const [done, setDone] = useState(['Päikkärit', 'Juo kahvi'])

  return (
    <div>
      <h1>ToDo</h1>

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
          done.map(task => 
            <li key={done.indexOf(task)}>
              {task}
            </li>
          )
        }
      </ul>

    </div>
  )
}

export default App;
