import React from "react"


function DragElements ({children, size, ...props }) {

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
      <div>
      <div 
       id = {props.id}
       className = {`${size}`} {...props}
       draggable="true"
       onDragStart = {dragstart}
       onDragOver = {dragover}
      >
        {children}
      
      </div>
      </div>
    )
  }
  //on droppable
  
      
       

    
export default DragElements