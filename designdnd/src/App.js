import React,{useState} from "react"
import ReactDOM from "react-dom"
import DragElements from "./DragElements"
import DrawingPalettes from "./Palettes"
import "./App.css"
function App() {
//  const data = [
//    { id:"e1",title:"image" , items:["Image"]},
//  ]
  
  
  const [list, setList] = useState([""]);
  const [item, setItem] = useState();

  function dragend (e) {
    const target = e.target;
   
    setItem(target.innerText)
    const newList = list.concat({ item });
 
    setList(newList);
    console.log(item)
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
        {/* {data.map((grp,grpI) =>  */}
      <DragElements id = "e1" size = "image" onDragEnd={dragend}>Image</DragElements>       
      <DragElements id = "e2" size = "text" onDragEnd={dragend}> Text</DragElements>
      <DragElements id = "e3" size = "text" onDragEnd={dragend}> Price</DragElements>
      <DragElements id = "e4" size = "text" onDragEnd={dragend}> Source Code</DragElements>
      <DragElements id = "e5" size = "text" onDragEnd={dragend}> Expiration Date</DragElements> 
      </DrawingPalettes>
      </div>
      <div>
      {ReactDOM.createPortal(
           <ul>
           {list.map((item) => (
             <li key={item.id}>{item.item}</li>
           ))}
          </ul>,
          portalContainer)}

      </div>    
    </main>
    
    
    
  )
}
export default App;