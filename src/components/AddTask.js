import { useState } from 'react'
const AddTask = ( {onAdd} ) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text){
      alert("Please add Task")
      return
    }//if

    onAdd({text, day, reminder})
    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <form lang="en" className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
      <label>Task</label>
      <input type="text" placheholder="Add task"
      value={text}
      onChange={(e) => setText(e.target.value)}/>
      </div>


      <div className='form-control'>
      <label>Day time</label>
      <input type="datetime-local"
      value={day}
      onChange={(e) => setDay(e.target.value)}/>
      </div>

      <div className='form-control form-control-check'>
      <label>Reminder</label>
      <input type="checkbox"
      checked={reminder}
      value={reminder}
      onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type="submit" value="Save Task" />
    </form>
  )
}//AddTasks

export default AddTask
