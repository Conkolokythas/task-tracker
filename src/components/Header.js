import React from 'react'

const Header = ({onAdd, showAdd}) => {
  return (
    <header>
      <div className="add">
        <h1>Task Tracker</h1>
        <button className='btn' onClick={onAdd}>Add</button>
      </div>
    </header>
  )
}//Header

export default Header
