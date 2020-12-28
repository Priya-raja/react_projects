import React from "react"
import {Link, Route, Switch} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'

function App () {
  return(
     
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about"> About </Link>
      </nav>
<Switch>
  <Route exact path="/"><Home /></Route> 
  <Route path="/about"><About/> </Route> 

</Switch>

    </div>


  )
}
export default App;

