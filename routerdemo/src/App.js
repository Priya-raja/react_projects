import React from "react"
import {Link, Route, Switch} from "react-router-dom"

function App () {
  return(
     
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about"> About </Link>
      </nav>
<Switch>
  <Route exact path="/" render ={ () => <h1>This is Home</h1>}/> 
  <Route path="/about" render = {()=> <h1>This is about</h1>}/> 

</Switch>

    </div>


  )
}
export default App;

