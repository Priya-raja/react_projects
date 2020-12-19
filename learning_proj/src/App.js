import React from "react"

import TodoItem from "./TodoItem";
import todosData from "./tododata"

function App() {
  const todoitem = todosData.map(item => <TodoItem key={item.id} item= {item}/>)
    return (
      <div className="todo-List">
       {todoitem}
       
      </div>
    );
    
}

export default App;