import { useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'
import AddTodoForm from './AddTodoForm'

function App() {
  const [todoList,setTodoList] = useState([]);

  return (
    <div>
      <h1>To-DoList</h1>
      
      <ToDoList/>
       
      <AddTodoForm/>
      <hr/>
     

       
    </div>
  );
}








export default App;
