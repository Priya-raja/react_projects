import React from "react"
import DragElements from "./DragElements"
import DrawingPalettes from "./Palettes"
import DraggedItem from "./DraggedItem"
import "./App.css"
function App() {

  const [item, setItem] = useState([
    { name: 'Image', message: "Hi there" },
    { name: 'Text', message: "Hey" },
    { name: 'Price', message:'Hey beautiful'},
    { name: 'Source Code', message:'Hey beautiful'},
    { name: 'Expiration Date', message:'Hey beautiful'}
]);


  function dragend (e) {
    const target = e.target;
    const elemnt = target.innerText
    console.log({elemnt})
   }
  
   return(
    <main> 
      <div className= "palettes">
      <DrawingPalettes id = "p1" className="container" >
        <h3>Drawing Palette</h3>

         
      </DrawingPalettes>
      <DrawingPalettes id = "p2" className="container" >
        <h3>Design Palette</h3>
        <div>
      <DragElements id = "e1" size = "image">Image</DragElements>
      <DragElements id = "e2" size = "text" onDragEnd = {dragend}>Text</DragElements>
      <DragElements id = "e3" size = "text">Price</DragElements>
      <DragElements id = "e4" size = "text">Source Code</DragElements>
      <DragElements id = "e5" size = "text">Expiration Date</DragElements>
      </div>
      </DrawingPalettes>
    
      </div>
      <DraggedItem>  </DraggedItem>
    </main>
  )
}
export default App;