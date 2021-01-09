import React from "react"
import DragElements from "./DragElements"
import Palette from "./Palettes"
import "./App.css"
function App() {
   return(
    <main> 
      <div className= "palettes">
      <Palette id = "p1" className="container"></Palette>
      <Palette id = "p2" className="container">
      <DragElements id = "e1" size = "image">Image</DragElements>
      <DragElements id = "e2" size = "text">Text</DragElements>
      <DragElements id = "e3" size = "text">Price</DragElements>
      <DragElements id = "e4" size = "text">Source Code</DragElements>
      <DragElements id = "e5" size = "text">Expiration Date</DragElements>
      </Palette>
      </div>
    </main>
  )
}
export default App;