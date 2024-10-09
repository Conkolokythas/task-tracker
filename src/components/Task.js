const Task = ( {task, onDelete, onreminder} ) => {
  return (
    <div className='task' onDoubleClick={() => onreminder(task.id)}>
      <h3>{task.text} <i style={{cursor:'pointer'}} onClick={() => onDelete(task.id)} className="material-icons">clear</i></h3>
      <p>{task.day}</p>
    </div>
  )
}//Task

export default Task
