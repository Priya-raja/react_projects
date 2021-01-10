import React from "react"
import DragElements from "./DragElements"
import DrawingPalettes from "./Palettes"
import DraggedItem from "./DraggedItem"
import "./App.css"
function App() {

  
//    const design = item.map((t) => {
//    <DragElements size ="text" onDragEnd={dragend}> {t.name}</DragElements>
// })
  
   return(
    <main> 
      <div className= "palettes">
      <DrawingPalettes id = "p1" className="container" >
        <h3>Drawing Palette</h3>
      </DrawingPalettes>
      <DrawingPalettes id = "p2" className="container" >
        <h3>Design Palette</h3>
       <DragElements id = "e1" size = "image" >Image</DragElements>
      <DragElements id = "e2" size = "text" >Text</DragElements>
      <DragElements id = "e3" size = "text">Price</DragElements>
      <DragElements id = "e4" size = "text">Source Code</DragElements>
      <DragElements id = "e5" size = "text">Expiration Date</DragElements> 
      </DrawingPalettes>
    
      </div>
      <DraggedItem> </DraggedItem>
      
    </main>
  )
}
export default App;