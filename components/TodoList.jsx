import React from 'react'
import Todo from './Todo'

function TodoList({todos,onRemoveTodo,onupdateTodo}) {
  return (
    <div style={{width:'100%',margintop:'50px',margin:'30px'}}>
      {
        todos && todos.map((todo)=>(
          <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onupdateTodo={onupdateTodo}/>
        ))
      }
        
        
    </div>
  )
}

export default TodoList