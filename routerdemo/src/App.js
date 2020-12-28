import React from "react"
import {Link, Route, Switch} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Info from './pages/Profile/Info'
import Profile from './pages/Profile/Profile'
import Settings from './pages/Profile/Settings'

function App () {
  return(
     
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about"> About </Link>
        <Link to="/pages/Profile/Profile">Profile</Link>
      </nav>
<Switch>
  <Route exact path="/"><Home /></Route> 
  

  <Route path="/about"><About/> </Route> 

  <Route  path="/pages/Profile/Profile"> <Profile/> </Route>

  <Route path="/Profile/Info"> 
   <Info/>
  </Route>

  <Route path="/Profile/Settings"> 
   <Settings/>
  </Route>


</Switch>

    </div>


  )
}
export default App;

