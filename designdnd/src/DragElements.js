import React, {useState} from "react"

function DragElements ({children, size, ...props }) {

  const [item, setItem] = useState([]);
  function dragend (e) {
    const target = e.target;
    item.push(target.innerText)  
    
   }

  const dragover = e => {
    e.preventDefault ();
    e.stopPropagation ();
   }

   const dragstart = (e) => {
    // Add the target element's id to the data transfer object
    const target = e.target;
    e.dataTransfer.setData('palette_id', target.id)
    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
   }

    return (
     
      <div 
       id = {props.id}
       className = {`${size}`} {...props}
       draggable="true"
       onDragEnd = {dragend}
       onDragStart = {dragstart}
       onDragOver = {dragover}
      >
        {children}
      </div>
      
  
    )
  }
  //on droppable
  
      
       

    
export default DragElements