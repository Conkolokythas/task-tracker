import Task from './Task'
const Tasks = ( {tasks, onDelete, onreminder} ) => {
  return (
    <>
      {tasks.map((task) => (<Task key={task.id}
        task={task}
        onDelete={onDelete}
        onreminder={onreminder} />))}
    </>
  )
}//Tasks

export default Tasks
