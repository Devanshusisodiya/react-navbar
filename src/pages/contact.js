import React from 'react'
import './contact.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

function Contact() {

    const [name, setName] = React.useState()
    const [email, setEmail] = React.useState()
    const [message, setMessage] = React.useState()


    
    function getName(event){
        setName(event.target.value)
    }
    function getEmail(event){
        setEmail(event.target.value)
    }
    function getMessage(event){
        setMessage(event.target.value)
    }

    const sendData = async ()=>{
        const data = {c_name: name,c_email: email, c_message: message}
        const req = await axios.post(
            'https://oe-api.herokuapp.com/api/contact/getDetails',
            data
        )
        if(req.data){
            console.log(req.data)
        }
    }

    return (
        <div>
            <div className="header">
                <h1 className="header-c">Contact Us</h1>
            </div>
            <div>
                <form className="f1">
                    <input className="form-control" placeholder="Name" onChange={getName}/>
                    <input className="form-control" placeholder="Email" onChange={getEmail}/>
                    <input className="form-control" placeholder="Message" onChange={getMessage}/>

                    <button type="button" className = "btn btn-success" onClick={sendData}>Submit</button>
                </form>
            </div>             
        </div>
    )
}

export default Contact
