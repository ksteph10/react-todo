function AddTodoForm ({onAddTodo}) {
    function handleAddTodo (event){
      event.preventDefault();
       const todoTitle = event.target.title.value;
       onAddTodo(todoTitle);

   console.log (todoTitle);
   event.target.reset();
}

  return (
      <form onSubmit={handleAddTodo}>
        <label htmlFor="Title">Title: </label>
        <input type="text" id="title" name="title" />
        <button type="submit">Add Todo</button>
      </form>
      
    );
}

export default AddTodoForm;