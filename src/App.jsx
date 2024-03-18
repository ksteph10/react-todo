import React, { useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'
import AddTodoForm from './AddTodoForm'

function App() {
  const [todoList,setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  return (
    <div>
      <h1>To-DoList</h1>
      
      <ToDoList/>
       
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>New Todo: {newTodo}</p>
      <hr/>
     

       
    </div>
  );
}








export default App;
