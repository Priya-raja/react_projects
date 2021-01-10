import React, {useState,useEffect} from "react"


function DragElements ({children, size, ...props }) {

  const [item, setItem] = useState([]);
  function dragend (e) {
    const target = e.target;
    item.push(target.innerText)  
    console.log(item)
    // let wish =  item.map((rep) => <li key = {rep}>{rep}</li>)
      
   }

   function newList() {
     setItem(item.map((rep) => <li key = {rep}>{rep}</li>))
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

   useEffect(() => {
      setItem(item)

   },[item])

    return (
     <div>
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
       {newList}
       </div>
      
    
      
    )
  }
  //on droppable
  
      
       

    
export default DragElements