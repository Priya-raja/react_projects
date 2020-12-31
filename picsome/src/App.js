import React from "react"
import {Switch, Route} from "react-router-dom"
import Header from "./Component/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
function App() {
  return (
    <div>
    <Header/>
    
    <Switch>
       <Route exact path="/">
         <Photos/>
       </Route>
       <Route path="/cart">
          <Cart />
      </Route>

    </Switch>

    <p> Home Page</p>
    </div>
  )
}
export default App;