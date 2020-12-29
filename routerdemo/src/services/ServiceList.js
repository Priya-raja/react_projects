import React from "react"
 import {Link} from "react-router-dom"
import serviceData from "./servicesData"

function ServiceList() {
  
    const services = serviceData.map(item => (
        <h1 key={item._id}>
            
    <Link to={`/services/${item._id}`}>{item.name}</Link> - ${item.price}</h1>
    ))

    return (
        <div>
        <h1>List of services</h1>
         <p> {services} </p>
        </div>
    )
}
export default ServiceList;
