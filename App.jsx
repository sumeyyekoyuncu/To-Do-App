import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todocreate from './components/Todocreate'
import TodoList from './components/TodoList'

function App() {
  const[todos,settodos]=useState([]);
  const createTodo=(newTodo)=>{
    settodos([...todos,newTodo]);

  }
  const removeTodo=(todoid)=>{
   const extractedArray=todos.filter((todo)=>todo.id!==todoid);
   settodos([...todos.filter((todo)=>todo.id!==todoid)])
   console.log(extractedArray);

  }
  const updateTodo=(newTodo)=>{
  const updatedTodos=todos.map((todo)=>{
    if(todo.id!==newTodo.id){
      return todo;
    }
    return newTodo;

    })
    settodos([...updatedTodos]);

  }
  console.log(todos)

  return (
   <div className='App'>
    <div className='main'>
      <Todocreate onCreateTodo={createTodo}/>
      <TodoList todos={todos} onRemoveTodo={removeTodo} onupdateTodo={updateTodo} />
    </div>
       
   </div>
  )
}

export default App
