import React from 'react'
import '../landing/Landing.css'
import './Contact.css'


class ContactForm extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            message: "",
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }




    render(){
        return (
            <form className="contact-form">
                <label>
                    Name:<br/>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name}/>
                </label>
                <label>
                    Email:<br/>
                    <input onChange={this.handleChange} type="text" name="email" value={this.state.email} />
                </label>
                <label>
                    Message:<br/>
                    <textarea onChange={this.handleChange} type="textarea" name="message" value={this.state.message}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default ContactForm