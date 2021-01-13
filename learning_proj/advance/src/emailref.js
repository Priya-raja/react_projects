import React, {useState,useRef} from "react"
function FrmEmail () {

    const[name, setName] = useState('');
    const[email,setEmail] = useState('');
    const focusRef = useRef(null);

return(
    <section>
    <h1> Subscribe to Email </h1>
    <input type="text"
    value={name}
    
    onChange= {(e) => {
        setName(e.target.value)
        if (name.length >= 10) {
            focusRef.current.focus()
          }
    }}
    placeholder="Name"/>

    <input type="text"
    value= {email}
    onChange = {(e) => {
        setEmail(e.target.value)
    }}
    placeholder="email"/>

<button ref={focusRef}>Submit</button>

</section>
    )
}
export default FrmEmail