import React, {Component} from 'react'

class Form2 extends Component{
    constructor() {
        super()
        this.state = {
            firstname: "",
            lastname: "",
            gender: "",
            isFriendly: true,
            
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
     const {name, type, value, checked} = e.target
    
     type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })

     }

    render() {
        return (
             <form onSubmit={this.handleChange} >
             <input type= "text"
             value = {this.state.firstname}
             name = "firstname"
             onChange = {this.handleChange} />

             <br/>
             <input type= "text"
             value = {this.state.lastname}
             name = "lastname"
             onChange = {this.handleChange} />
             <br/>
             
             <textarea value={"some default"}
              onChange= {this.handleChange} />

              <label>
              <input type="checkbox" 
              name = "isFriendly"
              checked ={this.state.isFriendly}
              onChange = {this.handleChange}
              /> Is friendly?
</label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>
                {/* Formik */}
                <br />
                
                <label>Favorite Color:</label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>
                
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your favorite color is {this.state.favColor}</h2>
                
            </form>
        )
    }
}

export default Form2

             


            


    