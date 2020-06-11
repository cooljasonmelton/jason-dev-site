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


    render(){
        return (
            <form className="contact-form">
                <label>
                    Name:<br/>
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:<br/>
                    <input type="text" name="email" />
                </label>
                <label>
                    Message:<br/>
                    <textarea type="textarea" name="message" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default ContactForm