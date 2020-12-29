import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from './pages/Home'
import Header from "./components/header"
import ServiceList from './services/ServiceList'
import serviceDetail from './services/serviceDetail'


function App () {
  return(
     
    <div>
      <Header />
      
<Switch>
  <Route exact path="/"><Home /></Route> 
  

  <Route exact path="/services"><ServiceList/> </Route> 

   

</Switch>

    </div>


  )
}
export default App;

