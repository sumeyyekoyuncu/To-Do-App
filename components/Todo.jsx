import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { FiEdit3 } from "react-icons/fi";
import '../App.css';
import { IoIosCheckmarkCircle } from "react-icons/io";

function Todo({todo, onRemoveTodo,onupdateTodo}) {
  const{id,content}=todo;
  const [editable,seteditable]=useState(false);
  const[newTodo,setnewTodo]=useState(content);
  const removeTodo=()=>{
    onRemoveTodo(id);
  }
  const updateTodo=()=>{
    const request = {
      id: id,
      content:newTodo
    }
    onupdateTodo(request)
    seteditable(false)

  }
  return (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',border:'1px solid lightgrey',marginTop:'10px'}}>
        <div>
           {
            editable ? <input style={{width:'380px'}} value={newTodo} onChange={(e)=>setnewTodo(e.target.value)} className='todo-input' type="text"/> : content
           }
        </div>
        <div>
            <CiCircleRemove className='todo-icons' onClick={removeTodo} />
            {
              editable ? <IoIosCheckmarkCircle className='todo-icons' onClick={updateTodo}/> 
              :  <FiEdit3 className='todo-icons'  onClick={()=>seteditable(true)}/>
            }

            
        </div>
        
    </div>
  )
}

export default Todo