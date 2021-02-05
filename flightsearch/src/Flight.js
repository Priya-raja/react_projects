import React, {useState} from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import flights from "./data.js";

function Flight() {
    const [name, setName] = useState("")
    const [selectedDate, setSelectedDate] = useState(null)
    const [passenger, setPassenger] = useState(0);
   
const SearchButton = () => {
    


}




    return (
        <>
        <form>
            <label>Flight Search</label>
            <label for="One way"> One way</label>
            {/* Origin */}
            <input type= "text" 
              value = {name}
              onChange = {(e) => setName(e.target.value) }
              placeholder="enter Origin city"
            ></input>
            {/* destination */}
             <input type= "text" 
              value = {name}
              onChange = {(e) => setName(e.target.value) }
              placeholder="enter Destination city"
            ></input>
            {/* Departure Date */}
            <DatePicker
            selected = {selectedDate}
            placeholderText = "Departure date"
            onChange ={date => setSelectedDate(date)}
            dateFormat = 'dd/MM/yyyy' />

            {/* return Date */}
            <DatePicker
            selected = {selectedDate}
            placeholderText = "Return date"
            onChange ={date => setSelectedDate(date)}
            dateFormat = 'dd/MM/yyyy' />
             
            <input type="numbers"
            value = {passenger}
            onChange ={(e) => setPassenger(e.target.value)}
            placeholder="Enter the passengers"
            ></input>
            <button>Search</button>



        </form>
        </>
    )

}
export default Flight