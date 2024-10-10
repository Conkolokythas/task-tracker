import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor',
      day: '2021-10-25T22:20',
      reminder: true,
    },
    {
      id: 2,
      text: 'School',
      day: '2021-11-25T22:20',
      reminder: true,
    }
  ])

  //AddTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('delete', id)
  }

  //reminder
  const reminder = (id) => {
    console.log(id)
  }

  return (
    <div className="container">

      <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask}/>}

      {tasks.length > 0 ? <Tasks tasks={tasks} onreminder={reminder} onDelete={deleteTask}/>: 'Add some Tasks' }
    </div>
  )

}

export default App;
