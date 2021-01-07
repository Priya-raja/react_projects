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
        focusRef.current.focus()
        setName(e.target.value)
    }}
    placeholder="Name"/>

    <input type="text"
    value= {email}
    onChange = {(e) => {
        setEmail(e.target.value)
    }}
    placeholder="email"/>

</section>
    )
}
export default FrmEmail