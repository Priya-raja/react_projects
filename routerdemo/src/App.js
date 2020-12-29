import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from './pages/Home'
import Header from "./components/header"
import ServiceList from './services/ServiceList'
import ServiceDetail from './services/ServiceDetail'


function App () {
  return(
     
    <div>
      <Header />
      
<Switch>
  <Route exact path="/"><Home /></Route> 
  

  <Route exact path="/services"><ServiceList/> </Route> 
  <Route exact path="/services/:serviceId"><ServiceDetail/> </Route>

   

</Switch>

    </div>


  )
}
export default App;

