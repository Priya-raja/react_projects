import React from "react"

import TodoItem from "./TodoItem";
import todosData from "./tododata"

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      todos: todosData
    }
  }
  render(){
  const todoitem = this.state.todos.map(item => <TodoItem key={item.id} item= {item}/>)
  
    return (
      <div className="todo-List">
       {todoitem}
       
      </div>
    );
    
  }
}

export default App;