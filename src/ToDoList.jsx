const todoList = [{
    id: 1,
    title: "complete assignment",
 },
 {
   id: 2,
   title: "wash the car",
 },
 {
   id: 3,
   title: "walk the dog",
 
 }
  ];


function ToDoList (){
    return (

            <div>
              
        
                <ul>{todoList.map(item => (
                <li key={item.id}>{item.title}</li>))}</ul>
            </div>
          );

}

export default ToDoList 
