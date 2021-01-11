import React,{useState} from "react"
import ReactDOM from "react-dom"
import DragElements from "./DragElements"
import DrawingPalettes from "./Palettes"
import "./App.css"
function App() {
 const data = [
   { id:"e1",title:"image" , items:["Image"]},
 ]
  
   

 

  // const itemname = document.getElementById("e1")
  // const textName = itemname.innerText
  // function handleItem () {
  //   setItem(textName)
  // }
  const [item, setItem] = useState("hello");
  function dragend (e) {
    const target = e.target;
    const element = target.innerText
    setItem(element)
   }

  
const portalContainer = document.getElementById('name');
  
   return(
     
    <main> 
      <div className="palettes">
      <DrawingPalettes id="p1" className="container">
      
         <h3>Drawing Palette</h3>
        
        
      </DrawingPalettes>

      <DrawingPalettes id = "p2" className="container">
      <h3>Design Palette</h3>
        {data.map((grp,grpI) => 
           <DragElements id = {grp.id} size = {grp.title} onDragEnd={dragend}>{grp.items}</DragElements>
        
        )}
        
{/*        
      <DragElements id = "e2" size = "text" >Text</DragElements>
      <DragElements id = "e3" size = "text" >Price</DragElements>
      <DragElements id = "e4" size = "text" >Source Code</DragElements>
      <DragElements id = "e5" size = "text" >Expiration Date</DragElements> */}
      </DrawingPalettes>
      </div>
      <div>
      {ReactDOM.createPortal(
           item,
          portalContainer)}

      </div>    
    </main>
    
    
    
  )
}
export default App;