import React from 'react';

class FormName extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: ""

        }
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange}/>
                <br/>
                <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default FormName