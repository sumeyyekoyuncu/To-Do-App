import React, { useState } from 'react'
import '../App.css';

function Todocreate({onCreateTodo}) {
  const [newTodo,setnewTodo]=useState('');
  const clearinput =()=>{
    setnewTodo('');
  }
  const createTodo = () =>{
    const request = { 
     
      id: Math.floor(Math.random()*99999),
      content:newTodo,

    }
    onCreateTodo(request)
    clearinput();

  }
  return (
    <div className='todo-create'>
        <input value={newTodo} 
        onChange={(e)=>setnewTodo(e.target.value)}  className='todo-input' type="text" placeholder='Enter Todo'/>
        <button onClick={createTodo} className='todo-button'>Create Todo</button>

    </div>
  )
}

export default Todocreate